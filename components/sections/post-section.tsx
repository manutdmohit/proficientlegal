'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  comments: Comment[];
  imageUrl?: string;
  result?: string;
}

export default function PostSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/post')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-[#003b73] mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="flex justify-center items-center py-16">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-[#0056a8]"></div>
            {/* Inner ring */}
            <div
              className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent rounded-full border-t-[#003b73]"
              style={{ animation: 'spin 1s linear infinite reverse' }}
            ></div>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0056a8] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-[#003b73] mb-8 text-center">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => {
          // Extract plain text from HTML content for excerpt
          const stripHtml = (html: string) => {
            const tmp = document.createElement('div');
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || '';
          };

          const plainText = stripHtml(post.content);
          const excerpt =
            plainText.length > 150
              ? plainText.substring(0, 150) + '...'
              : plainText;

          // Format date
          const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-AU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
          };

          return (
            <div
              key={post._id}
              className="flex flex-col bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-[300px] relative rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/teams/darren-ho.jpg"
                  alt={post.title}
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#003b73] mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                  {excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{formatDate(post.createdAt)}</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {post.comments.length}
                  </span>
                </div>

                <Link
                  href={`/posts/${post.slug}`}
                  className="inline-block bg-[#0056a8] text-white px-5 py-2 rounded hover:bg-[#003b73] transition mt-auto text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
