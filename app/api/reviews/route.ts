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
      console.error('Missing environment variables:', { 
        hasApiKey: !!apiKey, 
        hasPlaceId: !!placeId 
      });
      return NextResponse.json(
        { error: 'API key or Place ID not configured' },
        { status: 500 }
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    console.log('Making request to Google Places API with Place ID:', placeId);
    
    const response = await axios.get(url);

    console.log('Google Places API response status:', response.status);
    console.log('Google Places API response data:', JSON.stringify(response.data, null, 2));

    if (response.data.status === 'NOT_FOUND') {
      return NextResponse.json({ 
        error: 'Place not found', 
        details: 'The Place ID provided does not exist or is invalid',
        placeId: placeId 
      }, { status: 404 });
    }

    if (response.data.status === 'REQUEST_DENIED') {
      return NextResponse.json({ 
        error: 'API request denied', 
        details: 'Check your API key and ensure Places API is enabled',
        status: response.data.status 
      }, { status: 403 });
    }

    if (response.data.status !== 'OK') {
      return NextResponse.json({ 
        error: 'Google Places API error', 
        status: response.data.status,
        errorMessage: response.data.error_message 
      }, { status: 500 });
    }

    if (!response.data.result) {
      return NextResponse.json({ 
        error: 'Place not found', 
        details: 'No result returned from Google Places API',
        responseData: response.data 
      }, { status: 404 });
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
    console.error('Error fetching reviews:', error);
    
    // If we have cached data, return it even if it's expired
    if (cache.data) {
      return NextResponse.json(cache.data);
    }

    return NextResponse.json(
      { error: 'Failed to fetch reviews', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
