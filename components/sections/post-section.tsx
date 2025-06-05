'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl?: string;
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

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-[#003b73] mb-8 text-center">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => {
          const lines = post.content.split('\n');
          const excerpt =
            lines.find((line) => line && !line.startsWith('#')) || '';
          return (
            <div
              key={post._id}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6"
            >
              <Image
                src="/visa-approved.jpg"
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg mb-4 mx-auto"
                width={500}
                height={500}
              />

              <h3 className="text-2xl font-bold text-[#003b73] mb-2">
                {post.title}
              </h3>
              {/* <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p> */}
              <Link
                href={`/posts/${post.slug}`}
                className="inline-block bg-[#0056a8] text-white px-5 py-2 rounded hover:bg-[#003b73] transition mt-auto"
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
