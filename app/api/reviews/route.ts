import { NextResponse } from 'next/server';
import axios from 'axios';

// Cache duration in seconds (15 minutes)
const CACHE_DURATION = 900;

interface CacheData {
  reviews: any[];
  averageRating: number;
  totalRatings: number;
}

interface Cache {
  data: CacheData | null;
  timestamp: number;
}

// In-memory cache
let cache: Cache = {
  data: null,
  timestamp: 0,
};

export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cache.data && now - cache.timestamp < CACHE_DURATION * 1000) {
      return NextResponse.json(cache.data);
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const placeId = process.env.NEXT_PUBLIC_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'API key or Place ID not configured' },
        { status: 500 }
      );
    }

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );

    if (!response.data.result) {
      return NextResponse.json({ error: 'Place not found' }, { status: 404 });
    }

    const {
      reviews = [],
      rating = 0,
      user_ratings_total = 0,
    } = response.data.result;

    const responseData: CacheData = {
      reviews,
      averageRating: rating,
      totalRatings: user_ratings_total,
    };

    // Update cache
    cache = {
      data: responseData,
      timestamp: now,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    // If we have cached data, return it even if it's expired
    if (cache.data) {
      return NextResponse.json(cache.data);
    }

    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
