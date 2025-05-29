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
import { StarRating } from './star-rating';

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
  const averageRating = reviewsData.averageRating || 0;

  const SectionHeader = () => (
    <div className="text-center mb-8">
      <p className="text-gray-600 max-w-3xl mx-auto">
        Read authentic reviews from our clients about their experience with our
        legal services.
      </p>
      <div className="flex justify-center mt-2">
        <img
          src="/images/logos/google.svg"
          alt="Google"
          className="h-6 w-6 mr-2"
        />
        <span className="text-sm text-gray-500">Reviewed on Google</span>
      </div>
      <div className="mt-2 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <StarRating rating={averageRating} size="lg" />
          <span className="text-xl font-bold text-yellow-600">
            {averageRating.toFixed(1)}
          </span>
        </div>
        <span className="text-sm text-gray-500">Average Rating</span>
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
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/place/Proficient+Legal/@-33.9666143,151.1061199,17z/data=!3m1!5s0x6b12b9bd39ec2569:0xe4c8e07a66af9297!4m8!3m7!1s0x6b12b918c915886d:0x831b87d7b3b73802!8m2!3d-33.9666143!4d151.1061199!9m1!1b1!16s%2Fg%2F11vj2k95fc?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0056a8] hover:bg-[#003b73] text-white font-semibold py-2 px-4 rounded"
            >
              View All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
