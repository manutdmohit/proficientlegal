'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GoogleReviewsResponse } from '@/types/google-reviews';
import { fetchGoogleReviews } from '@/services/google-reviews-service';
import { ReviewCard } from './review-card';
import { Button } from '@/components/ui/button';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function GoogleReviewsSlider() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<Swiper | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

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
    if (reviewsData?.reviews) {
      swiperRef.current = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        on: {
          slideChange: () => {
            if (progressRef.current) {
              progressRef.current.style.width = '0%';
              progressRef.current.style.transition = 'width 5s linear';
              progressRef.current.style.width = '100%';
            }
          },
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [reviewsData]);

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
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {reviews.map((review) => (
              <div className="swiper-slide" key={review.reviewId}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-progress">
            <div ref={progressRef} className="swiper-progress-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
