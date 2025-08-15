import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Test creating a payment object with 'fast' consultation type
    const testPayment = new Payment({
      userId: '000000000000000000000000', // Test user ID
      amount: 110,
      currency: 'AUD',
      status: 'completed',
      paymentMethod: 'card',
      stripePaymentId: 'test_payment_id',
      stripeSessionId: 'test_session_id',
      consultationType: 'fast',
      consultationName: 'Fast Consultation',
      consultationDuration: '10 mins',
      consultationDate: new Date(),
      consultationTime: '10:00',
      customerName: 'Test Customer',
      customerEmail: 'test@example.com',
      customerPhone: '1234567890',
      message: 'Test message',
      description: 'Test payment for Fast Consultation',
    });

    // Validate without saving
    const validationError = testPayment.validateSync();
    if (validationError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationError.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Payment model accepts "fast" consultation type',
      paymentData: {
        consultationType: testPayment.consultationType,
        consultationName: testPayment.consultationName,
        amount: testPayment.amount,
      },
    });
  } catch (error) {
    console.error('Test payment model error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
