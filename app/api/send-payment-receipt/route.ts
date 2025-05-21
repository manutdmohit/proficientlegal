import { NextRequest, NextResponse } from 'next/server';
import { sendPaymentReceiptEmail } from '@/app/utils/sendgrid';

console.log('send-payment-receipt route loaded');

export async function POST(req: NextRequest) {
  console.log('\n========== PAYMENT RECEIPT EMAIL REQUEST ==========');
  try {
    const body = await req.json();
    console.log('Received request body:', body);

    const {
      customerName,
      customerEmail,
      amount,
      consultationType,
      consultationName,
      consultationDate,
      consultationTime,
      paymentId,
    } = body;

    // Validate required fields
    if (
      !customerName ||
      !customerEmail ||
      !amount ||
      !consultationType ||
      !consultationName ||
      !consultationDate ||
      !consultationTime ||
      !paymentId
    ) {
      console.error('Missing required fields:', {
        customerName: !!customerName,
        customerEmail: !!customerEmail,
        amount: !!amount,
        consultationType: !!consultationType,
        consultationName: !!consultationName,
        consultationDate: !!consultationDate,
        consultationTime: !!consultationTime,
        paymentId: !!paymentId,
      });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Preparing email data...');
    // Prepare email data
    await sendPaymentReceiptEmail({
      customerName,
      customerEmail,
      amount,
      consultationType,
      consultationName,
      consultationDate,
      consultationTime,
      paymentId,
    });

    console.log('Email sent successfully');
    console.log('===========================================\n');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('\n========== PAYMENT RECEIPT EMAIL ERROR ==========');
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
    });
    console.error('===========================================\n');
    return NextResponse.json(
      { error: 'Failed to send payment receipt email' },
      { status: 500 }
    );
  }
}
