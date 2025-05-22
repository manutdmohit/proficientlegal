import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Post } from '@/lib/models/Post';
import connectDB from '@/app/config/database';
import { slugify } from '@/lib/utils/slugify';
import { deleteImages } from '@/lib/utils/deleteImages';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const post = await Post.findById(params.id)
      .populate('author', 'name')
      .lean();

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    // Check if user is authenticated and is an admin
    if (!session?.user || session.user.role !== 'admin') {
      console.log('Unauthorized access attempt:', {
        isAuthenticated: !!session?.user,
        userRole: session?.user?.role,
      });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, content, excerpt, featuredImage, tags, published, seo } =
      body;

    await connectDB();

    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // If title changed, update slug
    if (title && title !== post.title) {
      const slug = slugify(title);
      const existingPost = await Post.findOne({
        slug,
        _id: { $ne: params.id },
      });
      if (existingPost) {
        return NextResponse.json(
          { error: 'A post with this title already exists' },
          { status: 400 }
        );
      }
      post.slug = slug;
    }

    // Update post
    Object.assign(post, {
      title: title || post.title,
      content: content || post.content,
      excerpt: excerpt || post.excerpt,
      featuredImage: featuredImage || post.featuredImage,
      tags: tags || post.tags,
      published: published !== undefined ? published : post.published,
      seo: seo || post.seo,
    });

    await post.save();

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Find the post first to get its images
    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Collect all image URLs from the post
    const imageUrls: string[] = [];

    // Add featured image if it exists
    if (post.featuredImage) {
      imageUrls.push(post.featuredImage);
    }

    // Extract image URLs from content
    const contentImages = post.content.match(/<img[^>]+src="([^">]+)"/g) || [];
    contentImages.forEach((imgTag: string) => {
      const src = imgTag.match(/src="([^"]+)"/)?.[1];
      if (src) {
        imageUrls.push(src);
      }
    });

    // Delete the post
    await Post.findByIdAndDelete(params.id);

    // Delete all associated images
    await deleteImages(imageUrls);

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
