import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { GoogleReview } from '@/types/google-reviews';
import { Star } from 'lucide-react';
import { formatReviewDate } from '@/services/google-reviews-service';

interface ReviewCardProps {
  review: GoogleReview;
}

/**
 * ReviewCard component to display a single Google review
 *
 * @param review - The Google review data to display
 */
export function ReviewCard({ review }: ReviewCardProps) {
  // Use window size hook to determine if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    // Check initially
    checkMobile();
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile optimized version
  if (isMobile) {
    return (
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-5 flex flex-col h-64 transition-transform hover:scale-105">
        {/* Header: Profile, Name, Stars, Date, Google icon */}
        <div className="flex items-center mb-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-300 mr-4">
            <Image
              src={review.reviewer.profilePhotoUrl || '/placeholder.svg'}
              alt={review.reviewer.displayName}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-900 truncate text-lg">
              {review.reviewer.displayName}
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.starRating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill={i < review.starRating ? 'currentColor' : 'none'}
                />
              ))}
              <span className="text-xs text-gray-500 ml-2">
                {formatReviewDate(review.createTime)}
              </span>
            </div>
          </div>
          {/* Google G icon */}
          <div className="ml-2">
            <Image
              src="/images/logos/google.svg"
              alt="Google"
              width={20}
              height={20}
            />
          </div>
        </div>
        {/* Review Text */}
        <div className="text-gray-700 text-base leading-relaxed mb-2 flex-grow overflow-y-auto">
          {review.comment}
        </div>
        {/* Footer */}
        <div className="border-t pt-2 mt-auto flex items-center justify-end">
          <span className="text-xs text-gray-500 mr-1">Posted on</span>
          <Image
            src="/images/logos/google.svg"
            alt="Google"
            width={16}
            height={16}
          />
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-5 flex flex-col w-full min-w-0 h-64 transition-transform hover:scale-105">
      {/* Reviewer information and rating */}
      <div className="flex items-start mb-3 min-w-0">
        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200 flex-shrink-0">
          <Image
            src={review.reviewer.profilePhotoUrl || '/placeholder.svg'}
            alt={review.reviewer.displayName}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-800 text-sm truncate text-lg">
            {review.reviewer.displayName}
          </h4>
          <div className="flex flex-wrap items-center min-w-0">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.starRating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill={i < review.starRating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">
              {formatReviewDate(review.createTime)}
            </span>
          </div>
        </div>
      </div>

      {/* Review content with quote styling */}
      <p className="text-gray-600 italic text-sm leading-relaxed w-full break-words whitespace-pre-line min-w-0 mb-3 overflow-y-auto">
        "{review.comment}"
      </p>

      {/* Google logo footer */}
      <div className="mt-auto pt-2 border-t border-gray-100 min-w-0">
        <div className="flex justify-end items-center text-xs text-gray-400 min-w-0">
          <span className="mr-1">Posted on</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 272 92"
            width="60"
            height="20"
            className="flex-shrink-0"
          >
            <path
              fill="#EA4335"
              d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            />
            <path
              fill="#FBBC05"
              d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            />
            <path
              fill="#4285F4"
              d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
            />
            <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
            <path
              fill="#EA4335"
              d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
            />
            <path
              fill="#4285F4"
              d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
