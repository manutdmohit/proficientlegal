import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Post } from '@/lib/models/Post';
import connectDB from '@/app/config/database';
import { slugify } from '@/lib/utils/slugify';
import mongoose from 'mongoose';

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    const published = searchParams.get('published') === 'true';

    const query: any = {};
    if (tag) query.tags = tag;
    if (search) {
      query.$text = { $search: search };
    }
    if (published !== null) query.published = published;

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('author', 'name')
      .lean();

    const total = await Post.countDocuments(query);

    return NextResponse.json({
      posts,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        current: page,
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

async function generateUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 1;
  let isUnique = false;

  while (!isUnique) {
    const existingPost = await Post.findOne({ slug });
    if (!existingPost) {
      isUnique = true;
    } else {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }

  return slug;
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { title, content, excerpt, featuredImage, tags, published, seo } =
      body;

    if (!title || !content || !excerpt) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    // Generate base slug from title
    const baseSlug = slugify(title);
    // Generate unique slug
    const slug = await generateUniqueSlug(baseSlug);

    const post = await Post.create({
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      tags,
      published,
      seo,
      author: new mongoose.Types.ObjectId(session.user.id),
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
