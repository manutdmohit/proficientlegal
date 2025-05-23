import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { GoogleReview } from "@/types/google-reviews"
import { StarRating } from "./star-rating"
import { formatReviewDate } from "@/services/google-reviews-service"

interface ReviewCardProps {
  review: GoogleReview
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
      <div className="bg-white rounded-lg p-3 flex flex-col items-start text-left w-full shadow">
        {/* Reviewer info in a row layout for mobile */}
        <div className="flex items-center mb-2 w-full">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 mr-2">
            <Image
              src={review.reviewer.profilePhotoUrl || "/placeholder.svg"}
              alt={review.reviewer.displayName}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="font-semibold text-gray-800 text-sm leading-tight">{review.reviewer.displayName}</h4>
            <div className="flex items-center mt-0.5">
              <StarRating rating={review.starRating} size="sm" className="mr-1" />
              <span className="text-xs text-gray-500">{formatReviewDate(review.createTime)}</span>
            </div>
          </div>
        </div>
        {/* Review content */}
        <p className="text-gray-700 text-sm leading-relaxed w-full break-words">
          {review.comment}
        </p>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 h-auto flex flex-col w-full min-w-0">
      {/* Reviewer information and rating */}
      <div className="flex items-start mb-2 sm:mb-3 min-w-0">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 border border-gray-200 min-w-0">
          <Image
            src={review.reviewer.profilePhotoUrl || "/placeholder.svg"}
            alt={review.reviewer.displayName}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-800 text-xs sm:text-sm min-w-0">{review.reviewer.displayName}</h4>
          <div className="flex flex-wrap items-center min-w-0">
            <StarRating rating={review.starRating} size="sm" className="mr-2" />
            <span className="text-xs text-gray-500">{formatReviewDate(review.createTime)}</span>
          </div>
        </div>
      </div>
      
      {/* Review content with quote styling */}
      <div className="flex-grow mb-3 sm:mb-4 w-full min-w-0">
        <p className="text-gray-600 italic text-sm leading-relaxed w-full break-words whitespace-pre-line min-w-0">"{review.comment}"</p>
      </div>
      
      {/* Google logo footer */}
      <div className="mt-auto pt-1 sm:pt-2 border-t border-gray-100 min-w-0">
        <div className="flex justify-end items-center text-[10px] sm:text-xs text-gray-400 min-w-0">
          <span className="mr-1 hidden xs:inline">Posted on</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="50" height="16" className="sm:w-[60px] sm:h-[20px]">
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
