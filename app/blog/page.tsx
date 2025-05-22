import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Post } from '@/lib/models/Post';
import connectDB from '@/app/config/database';

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
}

export const metadata: Metadata = {
  title: 'Blog | Proficient Legal',
  description: 'Latest legal insights and updates from Proficient Legal',
};

async function getPosts(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  await connectDB();

  const page = Number(searchParams.page) || 1;
  const limit = 10;
  const tag = searchParams.tag as string;
  const search = searchParams.search as string;

  const query: any = { published: true };
  if (tag) query.tags = tag;
  if (search) {
    query.$text = { $search: search };
  }

  const posts = await Post.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('author', 'name')
    .lean();

  const total = await Post.countDocuments(query);

  return {
    posts: JSON.parse(JSON.stringify(posts)),
    pagination: {
      total,
      pages: Math.ceil(total / limit),
      current: page,
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { posts, pagination } = await getPosts(searchParams);

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <div className="grid gap-8">
          {posts.map((post: PostData) => (
            <article
              key={post._id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {post.featuredImage && (
                <div className="relative h-64 w-full">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.author.name}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.createdAt}>
                    {format(new Date(post.createdAt), 'MMMM d, yyyy')}
                  </time>
                </div>

                <h2 className="text-2xl font-bold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <div
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags?.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {pagination.pages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}${
                    searchParams.tag ? `&tag=${searchParams.tag}` : ''
                  }${
                    searchParams.search ? `&search=${searchParams.search}` : ''
                  }`}
                  className={`px-4 py-2 rounded ${
                    pageNum === pagination.current
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {pageNum}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
