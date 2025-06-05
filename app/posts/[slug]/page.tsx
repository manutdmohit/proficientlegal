'use client';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import AddComment from './AddComment';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import Head from 'next/head';

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
  const [shareUrl, setShareUrl] = useState('');

  // Get slug from URL
  const slug =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/').pop()
      : '';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const fetchPost = useCallback(async () => {
    if (!slug) return;
    try {
      const res = await fetch(`/api/post/${slug}`);
      if (!res.ok) throw new Error('Post not found');
      const data = await res.json();
      setPost(data);
    } catch (err) {
      setError('Post not found');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error || !post)
    return (
      <div className="text-center text-red-500 py-8">
        {error || 'Post not found'}
      </div>
    );

  return (
    <>
      <Head>
        <title>{post?.title || 'Post'} | Proficient Legal</title>
        <meta property="og:title" content={post?.title || 'Post'} />
        <meta
          property="og:description"
          content={post?.content?.replace(/<[^>]+>/g, '').slice(0, 150) || ''}
        />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={post?.heroImage || '/visa-approved.jpg'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title || 'Post'} />
        <meta
          name="twitter:description"
          content={post?.content?.replace(/<[^>]+>/g, '').slice(0, 150) || ''}
        />
        <meta
          name="twitter:image"
          content={post?.heroImage || '/visa-approved.jpg'}
        />
        <meta name="twitter:url" content={shareUrl} />
      </Head>
      <section className="bg-gradient-to-b from-[#eaf4fb] to-white min-h-screen py-12">
        <Header />
        <div className="pt-[88px]">
          <div className="max-w-3xl mx-auto mb-8">
            <Image
              src={post?.heroImage || '/visa-approved.jpg'}
              alt={post?.title || 'Post Image'}
              className="w-96 h-96 object-cover rounded-xl shadow-lg mx-auto"
              width={1000}
              height={1000}
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              {post?.date && (
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              )}
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
              <div
                className="prose prose-lg prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: post?.content || '' }}
              />

              {/* Social Share Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-600 font-medium">
                  Share this post:
                </span>
                <div className="flex gap-2">
                  <FacebookShareButton
                    url={shareUrl}
                    hashtag="#ProficientLegal"
                    title={post?.title || ''}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={post.title}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              <AddComment postId={post?._id || ''} onRefresh={fetchPost} />
              <div className="space-y-4">
                {(post?.comments ?? [])
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((comment, idx) => (
                    <div
                      key={
                        (comment.createdAt || '') + (comment.email || '') + idx
                      }
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
    </>
  );
}
