import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';
import { sendPaymentReceiptEmail } from '@/app/utils/sendgrid';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
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
      paymentId: body.paymentId,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving payment or sending receipt:', error);
    return NextResponse.json(
      { error: 'Failed to save payment or send receipt' },
      { status: 500 }
    );
  }
}
