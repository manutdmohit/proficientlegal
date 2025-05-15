/**
 * Types for Google Reviews data structures
 * These types mirror the expected response format from the Google Business API
 */

/**
 * Represents a single Google review author
 */
export interface ReviewAuthor {
  displayName: string
  profilePhotoUrl: string
}

/**
 * Represents a single Google review
 */
export interface GoogleReview {
  name: string
  reviewId: string
  reviewer: ReviewAuthor
  starRating: number
  comment: string
  createTime: string
  updateTime: string
}

/**
 * Represents the complete Google Reviews API response
 */
export interface GoogleReviewsResponse {
  reviews: GoogleReview[]
  averageRating: number
  totalReviewCount: number
}
