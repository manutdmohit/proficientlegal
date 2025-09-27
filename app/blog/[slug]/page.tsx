import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { Post } from '@/lib/models/Post';
import { Comment } from '@/lib/models/Comment';
import connectDB from '@/app/config/database';
import CommentSection from '@/components/CommentSection';

interface PostData {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  published: boolean;
  featuredImage?: string;
  tags?: string[];
  createdAt: string;
  author: {
    name: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

interface CommentData {
  _id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
  parent?: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  await connectDB();
  const post = (await Post.findOne({ slug: params.slug, published: true })
    .select('title excerpt seo')
    .lean()) as PostData | null;

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords,
  };
}

async function getPost(slug: string) {
  await connectDB();
  const post = (await Post.findOne({ slug, published: true })
    .populate('author', 'name')
    .lean()) as PostData | null;

  if (!post) {
    notFound();
  }

  // Get comments
  const comments = await Comment.find({
    post: post._id,
    status: 'approved',
  })
    .populate('author', 'name')
    .sort({ createdAt: -1 })
    .lean();

  // Get related posts
  const relatedPosts = await Post.find({
    _id: { $ne: post._id },
    published: true,
    tags: { $in: post.tags },
  })
    .limit(3)
    .select('title slug excerpt featuredImage createdAt')
    .populate('author', 'name')
    .lean();

  return {
    post: JSON.parse(JSON.stringify(post)),
    comments: JSON.parse(JSON.stringify(comments)),
    relatedPosts: JSON.parse(JSON.stringify(relatedPosts)),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post, comments, relatedPosts } = await getPost(params.slug);

  return (
    <div className="container mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {post.featuredImage && (
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        )}

        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 mb-4 gap-1 sm:gap-0">
            <span className="text-sm sm:text-base">{post.author.name}</span>
            <span className="hidden sm:inline mx-2">•</span>
            <time dateTime={post.createdAt} className="text-sm sm:text-base">
              {format(new Date(post.createdAt), 'MMMM d, yyyy')}
            </time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <CommentSection postId={post._id} comments={comments} />

        {relatedPosts.length > 0 && (
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Posts</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost: any) => (
                <div
                  key={relatedPost._id}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {relatedPost.featuredImage && (
                    <div className="relative h-40 sm:h-44 md:h-48 w-full">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold mb-2">
                      <a
                        href={`/blog/${relatedPost.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {relatedPost.title}
                      </a>
                    </h3>
                    <div
                      className="text-sm text-gray-600 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: relatedPost.excerpt,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
