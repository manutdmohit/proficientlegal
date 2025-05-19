import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';

export async function GET() {
  try {
    await connectDB();
    
    const payments = await Payment.find({})
      .sort({ createdAt: -1 }) // Sort by newest first
      .select('-__v'); // Exclude version key
    
    return NextResponse.json({
      status: 'success',
      count: payments.length,
      data: payments
    });
  } catch (error: any) {
    console.error('Error fetching payments:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to fetch payments',
      error: error.message
    }, { status: 500 });
  }
} 