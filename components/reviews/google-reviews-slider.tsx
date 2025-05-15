"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { GoogleReviewsResponse } from "@/types/google-reviews"
import { fetchGoogleReviews } from "@/services/google-reviews-service"
import { ReviewCard } from "./review-card"
import { StarRating } from "./star-rating"
import { Button } from "@/components/ui/button"
import AnimationWrapper from "@/components/animation-wrapper"

/**
 * GoogleReviewsSlider component
 *
 * Fetches and displays Google reviews in an interactive slider
 * Includes overall rating summary and navigation controls
 */
export function GoogleReviewsSlider() {
  // State for reviews data, loading status, and errors
  const [reviewsData, setReviewsData] = useState<GoogleReviewsResponse | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // State for slider functionality
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3) // Default for desktop
  const [isMobileView, setIsMobileView] = useState(false)
  const [autoScroll, setAutoScroll] = useState(true)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  /**
   * Fetch reviews data on component mount
   */
  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true)
        const data = await fetchGoogleReviews(5) // Fetch up to 5 reviews
        setReviewsData(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching Google reviews:", err)
        setError("Failed to load reviews. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    getReviews()
  }, [])

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => {
      // For mobile devices (< 640px), show 1 review and enable mobile view
      if (window.innerWidth < 640) {
        setVisibleCount(1);
        setIsMobileView(true);
      }
      // For tablets (< 1024px), show 2 reviews
      else if (window.innerWidth < 1024) {
        setVisibleCount(2);
        setIsMobileView(false);
      }
      // For desktop, show 3 reviews
      else {
        setVisibleCount(3);
        setIsMobileView(false);
      }
    };

    // Set initial count
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    // Only start auto-scrolling if we have reviews data and autoScroll is enabled
    if (reviewsData?.reviews && autoScroll) {
      // Clear any existing interval
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }

      // Set up a new interval for auto-scrolling with infinite loop
      autoScrollIntervalRef.current = setInterval(() => {
        const goToNext = () => {
          setCurrentIndex((prevIndex: number) => {
            // Go to the first slide if we're at the last slide
            if (prevIndex === reviewsData.reviews.length - visibleCount) {
              return 0
            }
            // Otherwise, go forward one slide
            return prevIndex + 1
          })
        }
        goToNext()
      }, 5000) // Change slide every 5 seconds
    }

    // Clean up interval on component unmount or when autoScroll changes
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [reviewsData, autoScroll, visibleCount])

  /**
   * Navigate to the previous slide with continuous looping
   */
  const prevSlide = () => {
    if (!reviewsData?.reviews) return

    // Pause auto-scrolling when user interacts
    setAutoScroll(false)

    setCurrentIndex((prevIndex: number) => {
      if (prevIndex === 0) {
        // Wrap to the end if at the beginning (continuous loop)
        return Math.max(0, reviewsData.reviews.length - visibleCount)
      }
      return Math.max(0, prevIndex - 1)
    })
  }

  /**
   * Navigate to the next slide with continuous looping
   */
  const nextSlide = () => {
    if (!reviewsData?.reviews) return

    // Pause auto-scrolling when user interacts
    setAutoScroll(false)

    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, reviewsData.reviews.length - visibleCount)
      if (prevIndex >= maxIndex) {
        // If at the end, go back to the beginning (continuous loop)
        return 0
      }
      return Math.min(maxIndex, prevIndex + 1)
    })
  }

  /**
   * Go to a specific slide index
   */
  const goToSlide = (index: number) => {
    if (!reviewsData?.reviews) return

    // Pause auto-scrolling when user interacts
    setAutoScroll(false)

    const maxIndex = Math.max(0, reviewsData.reviews.length - visibleCount)
    setCurrentIndex(Math.min(maxIndex, Math.max(0, index)))
  }

  // Add a function to resume auto-scrolling
  const resumeAutoScroll = () => {
    setAutoScroll(true)
  }

  // If loading, show a loading skeleton
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
              <div key={i} className="bg-white rounded-lg shadow-md p-6 w-full max-w-md h-64 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // If error, show error message
  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Unable to Load Reviews</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => window.location.reload()} className="bg-[#0056a8] hover:bg-[#003b73]">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // If no reviews data, show nothing
  if (!reviewsData) return null

  // Calculate if navigation is needed (more reviews than visible count)
  const needsNavigation = reviewsData.reviews.length > visibleCount

  // Get the currently visible reviews
  const visibleReviews = reviewsData.reviews.slice(currentIndex, currentIndex + visibleCount)

  // If error, show error message
  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Unable to Load Reviews</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => window.location.reload()} className="bg-[#0056a8] hover:bg-[#003b73]">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // If loading, show skeleton UI
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="flex justify-center gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 w-full max-w-md h-64 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-6">
        <AnimationWrapper>
          <div className="text-center mb-8">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Read authentic reviews from our clients about their experience with our legal services.
            </p>
          </div>
        </AnimationWrapper>

        {/* Reviews slider */}
        <div className="relative min-w-0">
          {/* Previous button */}
          {needsNavigation && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 md:-translate-x-4 z-10 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0056a8] focus:ring-opacity-50 lg:-translate-x-6"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0056a8]" />
            </button>
          )}

          {/* Reviews container with smooth transition */}
          <div
            className="overflow-hidden w-full min-w-0"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            <div
              className="flex items-stretch transition-transform duration-500 ease-in-out min-w-0"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: visibleCount === 1 ? '100%' : `${(reviewsData.reviews.length / visibleCount) * 100}%`,
                gap: '1rem'
              }}
            >
              {reviewsData.reviews.map((review) => (
                <div
                  key={review.reviewId}
                  className={visibleCount === 1
                    ? 'box-border flex-none w-full min-w-0 flex flex-col'
                    : 'box-border basis-0 flex-1 min-w-0 w-full flex flex-col'}
                  style={{
                    width: visibleCount === 1 ? '100%' : `${100 / visibleCount}%`,
                    padding: '0 0.5rem'
                  }}
                >
                  <div className="h-full w-full min-w-0">
                    <ReviewCard review={review} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          {needsNavigation && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 md:translate-x-4 z-10 bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0056a8] focus:ring-opacity-50 lg:translate-x-6"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0056a8]" />
            </button>
          )}
        </div>

        {/* Pagination dots */}
        {needsNavigation && (
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1 sm:space-x-2">
            {Array.from({ length: reviewsData.reviews.length - visibleCount + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:outline-none ${
                  currentIndex === index
                    ? "bg-[#0056a8] w-4 sm:w-6" // Active dot is wider
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Add a visual indicator for auto-scrolling status */}
        {needsNavigation && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setAutoScroll(!autoScroll)}
              className="flex items-center text-sm text-gray-500 hover:text-[#0056a8] transition-colors"
              aria-label={autoScroll ? "Pause auto-scroll" : "Resume auto-scroll"}
            >
              {autoScroll ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
        )}

        {/* Google reviews link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/proficient-legal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#0056a8] hover:text-[#003b73] font-medium transition-colors"
          >
            <span>See all our reviews on Google</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
