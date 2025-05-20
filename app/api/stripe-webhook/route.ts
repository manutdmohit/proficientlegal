import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';
import mongoose from 'mongoose';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

// Add GET handler for webhook verification
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Stripe webhook endpoint is active' });
}

// Configure the route to handle raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  console.log('=== Webhook Request Received ===');
  console.log('Request method:', req.method);
  console.log('Content-Type:', req.headers.get('content-type'));
  console.log('Stripe-Signature:', req.headers.get('stripe-signature'));

  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    console.error('No Stripe signature found in headers');
    return NextResponse.json(
      { error: 'No Stripe signature found' },
      { status: 400 }
    );
  }

  const body = await req.text();
  console.log('Raw webhook body:', body);

  let event;
  try {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not set');
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log('Webhook event constructed successfully:', {
      type: event.type,
      id: event.id,
    });
  } catch (err: any) {
    console.error('Webhook signature verification failed:', {
      error: err.message,
      signature: sig,
      hasSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
    });
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === 'checkout.session.completed') {
    console.log('Processing checkout.session.completed event');
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not set');
      }

      console.log('Connecting to database...');
      await connectDB();

      console.log('Mongoose connection state:', {
        readyState: mongoose.connection.readyState,
        host: mongoose.connection.host,
        name: mongoose.connection.name,
      });

      if (!mongoose.connection.readyState) {
        throw new Error('Database connection not ready');
      }

      console.log('Session data:', {
        id: session.id,
        amount: session.amount_total,
        currency: session.currency,
        metadata: session.metadata,
        customer_email: session.customer_email,
        payment_status: session.payment_status,
      });

      // Validate required fields
      if (
        !session.metadata?.consultationType ||
        !session.metadata?.consultationName
      ) {
        throw new Error('Missing required consultation data in metadata');
      }

      const paymentData = {
        userId: new mongoose.Types.ObjectId(
          session.metadata?.userId || '000000000000000000000000'
        ),
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
        customerPhone: session.metadata?.phone,
        message: session.metadata?.message,
        description: `Payment for ${session.metadata?.consultationName} on ${session.metadata?.date} at ${session.metadata?.time}`,
      };

      console.log('Payment data prepared:', paymentData);

      // Validate the payment data against the schema
      const payment = new Payment(paymentData);
      const validationError = payment.validateSync();
      if (validationError) {
        console.error('Payment validation error:', validationError);
        throw validationError;
      }

      console.log('Attempting to save payment...');
      const savedPayment = await payment.save();
      console.log('Payment saved successfully:', {
        id: savedPayment._id,
        amount: savedPayment.amount,
        status: savedPayment.status,
      });

      return NextResponse.json({ success: true, paymentId: savedPayment._id });
    } catch (error: any) {
      console.error('Error processing webhook:', {
        message: error.message,
        stack: error.stack,
        sessionId: session.id,
        error: error,
      });
      return NextResponse.json(
        {
          error: 'Error processing webhook',
          details: error.message,
        },
        { status: 500 }
      );
    }
  }

  console.log('Unhandled event type:', event.type);
  return NextResponse.json({ received: true });
}
