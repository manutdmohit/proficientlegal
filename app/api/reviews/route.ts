import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
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

    return NextResponse.json({
      reviews,
      averageRating: rating,
      totalRatings: user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
