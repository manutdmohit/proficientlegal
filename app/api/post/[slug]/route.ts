import { NextRequest, NextResponse } from 'next/server';
import Post from '@/app/models/Post';
import connectDB from '@/app/config/database';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  try {
    await connectDB();

    const post = await Post.findOne({ slug });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
