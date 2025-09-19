import { NextRequest, NextResponse } from 'next/server';
import Post from '@/app/models/Post';
import connectDB from '@/app/config/database';
import mongoose from 'mongoose';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const posts = await Post.find({}).sort({ createdAt: -1 });

    const response = NextResponse.json(posts);

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, comment, postId } = await request.json();

    const post = await Post.findOne({ _id: postId, 'comments.email': email });

    if (post) {
      return NextResponse.json(
        { error: 'Comment already exists by this email' },
        { status: 400 }
      );
    }

    const newComment = {
      name,
      email,
      comment,
      createdAt: new Date(),
    };

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: newComment } },
      { new: true }
    );

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
