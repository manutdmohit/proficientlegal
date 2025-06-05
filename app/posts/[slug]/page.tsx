'use client';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AddComment from './AddComment';

export default function PostSlugPage() {
  const [post, setPost] = useState<{
    _id: string;
    title: string;
    content: string;
    comments: {
      name: string;
      email: string;
      comment: string;
      createdAt: string;
    }[];
    date?: string;
    heroImage?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Get slug from URL
  const slug =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/').pop()
      : '';

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/post/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Post not found');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error || !post)
    return (
      <div className="text-center text-red-500 py-8">
        {error || 'Post not found'}
      </div>
    );

  return (
    <section className="bg-gradient-to-b from-[#eaf4fb] to-white min-h-screen py-12">
      <Header />
      <div className="pt-[88px]">
        {post.heroImage && (
          <div className="max-w-3xl mx-auto mb-8">
            <Image
              src={post.heroImage}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              width={1000}
              height={1000}
              priority
            />
          </div>
        )}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            {post.date && (
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
            <div
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <AddComment postId={post._id} />
            <div className="space-y-4">
              {(post.comments ?? []).map((comment, idx) => (
                <div
                  key={(comment.createdAt || '') + (comment.email || '') + idx}
                  className="bg-[#f6fafd] border border-[#eaf4fb] rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-[#0056a8]">
                      {comment.name}
                    </span>
                    {comment.createdAt && (
                      <span className="text-xs text-gray-400">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-700">{comment.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </section>
  );
}
