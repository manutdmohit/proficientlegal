import { NextRequest, NextResponse } from 'next/server';
import Post from '@/app/models/Post';
import connectDB from '@/app/config/database';
import mongoose from 'mongoose';

// Add revalidation time of 1 hour
export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const posts = await Post.find({});

    // Add cache control headers
    const response = NextResponse.json(posts);

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
