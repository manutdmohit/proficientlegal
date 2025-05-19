import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { 
  apiVersion: '2025-04-30.basil' 
});

export async function POST(req: NextRequest) {
  console.log('=== Webhook Request Received ===');
  console.log('Headers:', Object.fromEntries(req.headers.entries()));
  
  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    console.error('No Stripe signature found in headers');
    return NextResponse.json({ error: 'No Stripe signature found' }, { status: 400 });
  }
  
  const body = await req.text();
  console.log('Request body:', body);

  let event;
  try {
    console.log('Attempting to verify webhook signature with secret:', process.env.STRIPE_WEBHOOK_SECRET?.slice(0, 5) + '...');
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    console.log('Webhook signature verified successfully');
    console.log('Event type:', event.type);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', {
      error: err.message,
      signature: sig,
      hasSecret: !!process.env.STRIPE_WEBHOOK_SECRET
    });
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    console.log('Processing checkout.session.completed event');
    const session = event.data.object as Stripe.Checkout.Session;
    
    try {
      console.log('Connecting to database...');
      const db = await connectDB();
      if (!db) {
        throw new Error('Failed to connect to database');
      }
      console.log('Database connected successfully');

      console.log('Session data:', {
        id: session.id,
        amount: session.amount_total,
        metadata: session.metadata,
        payment_intent: session.payment_intent,
        customer_email: session.customer_email,
        status: session.status,
        payment_status: session.payment_status
      });

      const paymentData = {
        userId: session.metadata?.userId || '000000000000000000000000',
        amount: session.amount_total ? session.amount_total / 100 : 0,
        currency: session.currency?.toUpperCase() || 'AUD',
        status: 'completed',
        paymentMethod: 'card',
        stripePaymentId: session.payment_intent as string,
        stripeSessionId: session.id,
        consultationType: session.metadata?.consultationType,
        consultationName: session.metadata?.consultationName,
        consultationDuration: session.metadata?.consultationDuration,
        consultationDate: new Date(session.metadata?.date || ''),
        consultationTime: session.metadata?.time,
        customerName: session.metadata?.name,
        customerEmail: session.customer_email,
        message: session.metadata?.message,
        description: `Payment for ${session.metadata?.consultationName} on ${session.metadata?.date} at ${session.metadata?.time}`,
      };

      console.log('Creating payment record with data:', paymentData);
      const payment = await Payment.create(paymentData);
      console.log('Payment record created successfully:', payment._id);

      return NextResponse.json({ success: true, paymentId: payment._id });
    } catch (error: any) {
      console.error('Error processing webhook:', {
        message: error.message,
        stack: error.stack,
        sessionId: session.id,
        error: error
      });
      return NextResponse.json({ 
        error: 'Error processing webhook',
        details: error.message 
      }, { status: 500 });
    }
  }

  console.log('Unhandled event type:', event.type);
  return NextResponse.json({ received: true });
} 