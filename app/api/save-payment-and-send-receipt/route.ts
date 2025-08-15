import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';
import { sendPaymentReceiptEmail } from '@/app/utils/sendgrid';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Payment data received:', {
      consultationType: body.consultationType,
      consultationName: body.consultationName,
      amount: body.amount,
    });

    await connectDB();

    // Save payment to DB
    const payment = new Payment({
      userId: body.userId,
      amount: body.amount,
      currency: body.currency,
      status: body.status,
      paymentMethod: body.paymentMethod,
      stripePaymentId: body.stripePaymentId,
      stripeSessionId: body.stripeSessionId,
      consultationType: body.consultationType,
      consultationName: body.consultationName,
      consultationDuration: body.consultationDuration,
      consultationDate: body.consultationDate,
      consultationTime: body.consultationTime,
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone,
      message: body.message,
      description: body.description,
    });

    // Validate the payment object before saving
    const validationError = payment.validateSync();
    if (validationError) {
      console.error('Payment validation error:', validationError);
      return NextResponse.json(
        { error: `Payment validation failed: ${validationError.message}` },
        { status: 400 }
      );
    }

    await payment.save();

    // Send payment receipt email
    await sendPaymentReceiptEmail({
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      amount: body.amount,
      consultationType: body.consultationType,
      consultationName: body.consultationName,
      consultationDate: body.consultationDate,
      consultationTime: body.consultationTime,
      paymentId: body.paymentId || body.stripePaymentId,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving payment or sending receipt:', error);
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      {
        error: `Failed to save payment or send receipt: ${
          error instanceof Error ? error.message : String(error)
        }`,
      },
      { status: 500 }
    );
  }
}
