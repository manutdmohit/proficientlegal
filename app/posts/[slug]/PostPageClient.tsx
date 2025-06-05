'use client';

import Image from 'next/image';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import AddComment from './AddComment';
import { format } from 'date-fns';

interface Comment {
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  comments: Comment[];
  date?: string;
  heroImage?: string;
  author?: {
    name: string;
  };
}

interface PostPageClientProps {
  post: Post;
  shareUrl: string;
}

export default function PostPageClient({
  post,
  shareUrl,
}: PostPageClientProps) {
  // Clean content for description
  const cleanContent =
    post.content?.replace(/<[^>]+>/g, '').slice(0, 150) || '';

  return (
    <section className="bg-gradient-to-b from-[#eaf4fb] to-white min-h-screen py-12">
      <div className="pt-[88px]">
        <div className="max-w-3xl mx-auto mb-8">
          <Image
            src={post.heroImage || '/visa-approved.jpg'}
            alt={post.title || 'Post Image'}
            className="w-96 h-96 object-cover rounded-xl shadow-lg mx-auto"
            width={1000}
            height={1000}
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            {post.date && (
              <p className="text-gray-500 text-sm mb-2">
                {format(new Date(post.date), 'dd/MM/yyyy')}
              </p>
            )}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
            <div
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />

            {/* Social Share Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-gray-600 font-medium">
                Share this post:
              </span>
              <div className="flex gap-2">
                <FacebookShareButton
                  url={shareUrl}
                  title={post.title}
                  hashtag="#ProficientLegal"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  title={`${post.title}\n\n${cleanContent}`}
                  hashtags={['ProficientLegal', 'LegalServices']}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <AddComment postId={post._id} />
            <div className="space-y-4">
              {(post.comments ?? [])
                .sort(
                  (a: Comment, b: Comment) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .map((comment: Comment, idx: number) => (
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
                          {format(new Date(comment.createdAt), 'dd/MM/yyyy')}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-700">{comment.comment}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
