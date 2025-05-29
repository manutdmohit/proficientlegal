import type {
  GoogleReview,
  GoogleReviewsResponse,
} from '@/types/google-reviews';

// Cache duration in milliseconds (15 minutes)
const CACHE_DURATION = 900 * 1000;

// Client-side cache
let clientCache: {
  data: GoogleReviewsResponse | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

/**
 * Mock Google Reviews data
 * This simulates the response we would get from the Google Business API
 */
const mockReviews: GoogleReview[] = [
  {
    name: 'reviews/1',
    reviewId: '1',
    reviewer: {
      displayName: 'Sarah Thompson',
      profilePhotoUrl: '/professional-woman-headshot.png',
    },
    starRating: 5,
    comment:
      'Proficient Legal provided exceptional service during my divorce proceedings. Their family law team was compassionate, professional, and achieved an outcome that exceeded my expectations. I highly recommend their services to anyone needing family law assistance.',
    createTime: '2023-09-15T10:30:00Z',
    updateTime: '2023-09-15T10:30:00Z',
  },
  {
    name: 'reviews/2',
    reviewId: '2',
    reviewer: {
      displayName: 'Michael Chen',
      profilePhotoUrl: '/professional-man-headshot.png',
    },
    starRating: 5,
    comment:
      'I worked with Proficient Legal for my property purchase, and they made the entire process smooth and stress-free. Their attention to detail and clear communication throughout the transaction gave me complete confidence. Excellent property law specialists!',
    createTime: '2023-10-02T14:45:00Z',
    updateTime: '2023-10-02T14:45:00Z',
  },
  {
    name: 'reviews/3',
    reviewId: '3',
    reviewer: {
      displayName: 'Aisha Patel',
      profilePhotoUrl: '/professional-woman-dark-hair.png',
    },
    starRating: 4,
    comment:
      'The immigration team at Proficient Legal successfully handled my partner visa application. They were knowledgeable about the latest regulations and kept me informed at every stage. The process took slightly longer than expected, but the outcome was positive.',
    createTime: '2023-08-20T09:15:00Z',
    updateTime: '2023-08-20T09:15:00Z',
  },
  {
    name: 'reviews/4',
    reviewId: '4',
    reviewer: {
      displayName: 'James Wilson',
      profilePhotoUrl: '/middle-aged-man-glasses.png',
    },
    starRating: 5,
    comment:
      "After struggling with a complex property dispute, I turned to Proficient Legal for help. Their expertise in property law was evident from our first meeting. They resolved the issue efficiently and kept costs reasonable. I couldn't be happier with the service.",
    createTime: '2023-11-05T16:20:00Z',
    updateTime: '2023-11-05T16:20:00Z',
  },
  {
    name: 'reviews/5',
    reviewId: '5',
    reviewer: {
      displayName: 'Emma Rodriguez',
      profilePhotoUrl: '/young-professional-woman-smiling.png',
    },
    starRating: 5,
    comment:
      "The team at Proficient Legal guided me through a complicated child custody case with professionalism and empathy. They always had my child's best interests at heart and secured an arrangement that works for everyone involved. Truly outstanding family lawyers.",
    createTime: '2023-07-12T11:30:00Z',
    updateTime: '2023-07-12T11:30:00Z',
  },
];

/**
 * Simulates fetching Google Reviews from an API
 * In a production environment, this would make an actual API call
 *
 * @param limit - Maximum number of reviews to return
 * @returns Promise resolving to a GoogleReviewsResponse object
 */
export async function fetchGoogleReviews(
  limit = 5
): Promise<GoogleReviewsResponse> {
  // Check if we have valid cached data
  const now = Date.now();
  if (clientCache.data && now - clientCache.timestamp < CACHE_DURATION) {
    return clientCache.data;
  }

  const res = await fetch('/api/reviews');
  if (!res.ok) throw new Error('Failed to fetch Google reviews');
  const data = await res.json();

  const reviews = (data.reviews || [])
    .slice(0, limit)
    .map((review: any, idx: number) => ({
      name: `reviews/${idx + 1}`,
      reviewId: review.time?.toString() || `${idx + 1}`,
      reviewer: {
        displayName: review.author_name,
        profilePhotoUrl: review.profile_photo_url,
      },
      starRating: review.rating,
      comment: review.text,
      createTime: new Date(review.time * 1000).toISOString(),
      updateTime: new Date(review.time * 1000).toISOString(),
    }));

  // const reviews = [
  //   {
  //     name: 'reviews/1',
  //     reviewId: '1716900000',
  //     reviewer: {
  //       displayName: 'Alice Johnson',
  //       profilePhotoUrl: '',
  //     },
  //     starRating: 5,
  //     comment:
  //       'Outstanding service! Very professional and supportive throughout the entire process.',
  //     createTime: new Date(1716900000 * 1000).toISOString(),
  //     updateTime: new Date(1716900000 * 1000).toISOString(),
  //   },
  //   {
  //     name: 'reviews/2',
  //     reviewId: '1716800000',
  //     reviewer: {
  //       displayName: 'Mark Thompson',
  //       profilePhotoUrl: '',
  //     },
  //     starRating: 4,
  //     comment:
  //       'Very helpful and knowledgeable. I would definitely recommend their services.',
  //     createTime: new Date(1716800000 * 1000).toISOString(),
  //     updateTime: new Date(1716800000 * 1000).toISOString(),
  //   },
  //   {
  //     name: 'reviews/3',
  //     reviewId: '1716700000',
  //     reviewer: {
  //       displayName: 'Sophia Lee',
  //       profilePhotoUrl: '',
  //     },
  //     starRating: 5,
  //     comment:
  //       'They made everything easy to understand. Great experience overall!',
  //     createTime: new Date(1716700000 * 1000).toISOString(),
  //     updateTime: new Date(1716700000 * 1000).toISOString(),
  //   },
  //   {
  //     name: 'reviews/4',
  //     reviewId: '1716600000',
  //     reviewer: {
  //       displayName: 'James Nguyen',
  //       profilePhotoUrl: '',
  //     },
  //     starRating: 3,
  //     comment: 'Service was okay, but I expected faster responses.',
  //     createTime: new Date(1716600000 * 1000).toISOString(),
  //     updateTime: new Date(1716600000 * 1000).toISOString(),
  //   },
  //   {
  //     name: 'reviews/5',
  //     reviewId: '1716500000',
  //     reviewer: {
  //       displayName: 'Emily Davis',
  //       profilePhotoUrl: '',
  //     },
  //     starRating: 5,
  //     comment:
  //       'Absolutely excellent. Highly responsive and truly cared about my case.',
  //     createTime: new Date(1716500000 * 1000).toISOString(),
  //     updateTime: new Date(1716500000 * 1000).toISOString(),
  //   },
  // ];

  const responseData: GoogleReviewsResponse = {
    reviews,
    averageRating: data.averageRating || 0,
    totalReviewCount: data.totalRatings || 0,
  };

  // Update client cache
  clientCache = {
    data: responseData,
    timestamp: now,
  };

  return responseData;
}

/**
 * Formats a date string from ISO format to a more readable format
 *
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., "September 15, 2023")
 */
export function formatReviewDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
