'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GoogleReviewsResponse } from '@/types/google-reviews';
import { fetchGoogleReviews } from '@/services/google-reviews-service';
import { ReviewCard } from './review-card';
import { Button } from '@/components/ui/button';

export function GoogleReviewsSlider() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGoogleReviews(5);
        setReviewsData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load reviews. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    // Set up auto scroll interval if conditions met
    if (reviewsData?.reviews && autoScroll) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex >= reviewsData.reviews.length - visibleCount) {
            return 0;
          }
          return prevIndex + 1;
        });
      }, 5000);
    }

    // Cleanup on unmount or dependency change
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [reviewsData, autoScroll, visibleCount]);

  const prevSlide = () => {
    if (!reviewsData?.reviews) return;
    setAutoScroll(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0)
        return Math.max(0, reviewsData.reviews.length - visibleCount);
      return Math.max(0, prevIndex - 1);
    });
  };

  const nextSlide = () => {
    if (!reviewsData?.reviews) return;
    setAutoScroll(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, reviewsData.reviews.length - visibleCount);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="flex justify-center gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 w-full max-w-md h-64 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Unable to Load Reviews
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-[#0056a8] hover:bg-[#003b73]"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!reviewsData) return null;

  const reviews = reviewsData.reviews || [];
  const reviewCount = reviews.length;

  const SectionHeader = () => (
    <div className="text-center mb-8">
      <p className="text-gray-600 max-w-3xl mx-auto">
        Read authentic reviews from our clients about their experience with our
        legal services.
      </p>
      <div className="flex justify-center mt-2">
        <img src="/google-g.svg" alt="Google" className="h-6 w-6 mr-2" />
        <span className="text-sm text-gray-500">Reviewed on Google</span>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <SectionHeader />
        <div className="relative">
          <div className="flex justify-between mb-4">
            <Button onClick={prevSlide} variant="ghost">
              <ChevronLeft />
            </Button>
            <Button onClick={nextSlide} variant="ghost">
              <ChevronRight />
            </Button>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
                // width: `${(reviews.length / visibleCount) * 100}%`,
              }}
            >
              {reviews.map((review) => (
                <div
                  className="min-w-full sm:min-w-[320px] h-auto overflow-visible"
                  key={review.reviewId}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
