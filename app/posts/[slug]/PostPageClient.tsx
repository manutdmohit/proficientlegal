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
  postImage?: string;
  result?: string;
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
  const cleanContent =
    post.content?.replace(/<[^>]+>/g, '').slice(0, 150) || '';

  return (
    <section className="bg-gradient-to-b from-[#eaf4fb] to-white min-h-screen py-8 sm:py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 pt-[80px] sm:pt-[100px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* IMAGE SECTION */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] rounded-xl overflow-hidden">
          <Image
            src={post.postImage || '/images/teams/darren-ho.jpg'}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, (max-width: 1536px) 50vw, 50vw"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="max-w-3xl mx-auto lg:max-w-none">
          <div className="mb-6 sm:mb-8 text-center">
            {post.date && (
              <p className="text-gray-500 text-sm mb-2">
                {format(new Date(post.date), 'dd/MM/yyyy')}
              </p>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
            <div
              className="prose prose-sm sm:prose-base lg:prose-lg prose-blue max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-p:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />

            {/* RESULT IMAGE */}
            {post.result! === ' ' && (
              <div className="mt-8 p-4 md:p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-4">
                  Case Result
                </h3>
                <div className="relative w-full max-w-full rounded-lg overflow-hidden">
                  <Image
                    src={post.result}
                    alt="Case Result"
                    width={800}
                    height={600}
                    className="w-full h-auto max-w-full object-contain"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, (max-width: 1536px) 60vw, 50vw"
                  />
                </div>
              </div>
            )}

            {/* SOCIAL SHARE BUTTONS */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <span className="text-gray-600 font-medium text-sm sm:text-base">
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

          {/* COMMENTS SECTION */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Comments</h2>
            <AddComment postId={post._id} />
            <div className="space-y-4">
              {(post.comments ?? [])
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
                    className="bg-[#f6fafd] border border-[#eaf4fb] rounded-lg p-3 sm:p-4"
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
