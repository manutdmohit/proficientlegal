import type { GoogleReview, GoogleReviewsResponse } from "@/types/google-reviews"

/**
 * Mock Google Reviews data
 * This simulates the response we would get from the Google Business API
 */
const mockReviews: GoogleReview[] = [
  {
    name: "reviews/1",
    reviewId: "1",
    reviewer: {
      displayName: "Sarah Thompson",
      profilePhotoUrl: "/professional-woman-headshot.png",
    },
    starRating: 5,
    comment:
      "Proficient Legal provided exceptional service during my divorce proceedings. Their family law team was compassionate, professional, and achieved an outcome that exceeded my expectations. I highly recommend their services to anyone needing family law assistance.",
    createTime: "2023-09-15T10:30:00Z",
    updateTime: "2023-09-15T10:30:00Z",
  },
  {
    name: "reviews/2",
    reviewId: "2",
    reviewer: {
      displayName: "Michael Chen",
      profilePhotoUrl: "/professional-man-headshot.png",
    },
    starRating: 5,
    comment:
      "I worked with Proficient Legal for my property purchase, and they made the entire process smooth and stress-free. Their attention to detail and clear communication throughout the transaction gave me complete confidence. Excellent property law specialists!",
    createTime: "2023-10-02T14:45:00Z",
    updateTime: "2023-10-02T14:45:00Z",
  },
  {
    name: "reviews/3",
    reviewId: "3",
    reviewer: {
      displayName: "Aisha Patel",
      profilePhotoUrl: "/professional-woman-dark-hair.png",
    },
    starRating: 4,
    comment:
      "The immigration team at Proficient Legal successfully handled my partner visa application. They were knowledgeable about the latest regulations and kept me informed at every stage. The process took slightly longer than expected, but the outcome was positive.",
    createTime: "2023-08-20T09:15:00Z",
    updateTime: "2023-08-20T09:15:00Z",
  },
  {
    name: "reviews/4",
    reviewId: "4",
    reviewer: {
      displayName: "James Wilson",
      profilePhotoUrl: "/middle-aged-man-glasses.png",
    },
    starRating: 5,
    comment:
      "After struggling with a complex property dispute, I turned to Proficient Legal for help. Their expertise in property law was evident from our first meeting. They resolved the issue efficiently and kept costs reasonable. I couldn't be happier with the service.",
    createTime: "2023-11-05T16:20:00Z",
    updateTime: "2023-11-05T16:20:00Z",
  },
  {
    name: "reviews/5",
    reviewId: "5",
    reviewer: {
      displayName: "Emma Rodriguez",
      profilePhotoUrl: "/young-professional-woman-smiling.png",
    },
    starRating: 5,
    comment:
      "The team at Proficient Legal guided me through a complicated child custody case with professionalism and empathy. They always had my child's best interests at heart and secured an arrangement that works for everyone involved. Truly outstanding family lawyers.",
    createTime: "2023-07-12T11:30:00Z",
    updateTime: "2023-07-12T11:30:00Z",
  },
]

/**
 * Simulates fetching Google Reviews from an API
 * In a production environment, this would make an actual API call
 *
 * @param limit - Maximum number of reviews to return
 * @returns Promise resolving to a GoogleReviewsResponse object
 */
export async function fetchGoogleReviews(limit = 5): Promise<GoogleReviewsResponse> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Calculate average rating
  const totalStars = mockReviews.reduce((sum, review) => sum + review.starRating, 0)
  const averageRating = totalStars / mockReviews.length

  // Return simulated API response
  return {
    reviews: mockReviews.slice(0, limit),
    averageRating,
    totalReviewCount: mockReviews.length,
  }
}

/**
 * Formats a date string from ISO format to a more readable format
 *
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., "September 15, 2023")
 */
export function formatReviewDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
