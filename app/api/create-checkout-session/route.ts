import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export async function POST(req: NextRequest) {
  try {
    const authSession = await getServerSession(authOptions);
    const userId = authSession?.user?.id || '000000000000000000000000';

    const {
      name,
      email,
      phone,
      message,
      date,
      time,
      consultationType,
      consultationName,
      consultationPrice,
      stripeAmount,
      consultationDuration,
    } = await req.json();

    console.log('Creating Stripe customer with email:', email);
    const customer = await stripe.customers.create({
      email, // use the email from the current booking
      name,
      phone,
      metadata: {
        message,
        date,
        time,
        consultationType,
        consultationName,
        consultationPrice,
        consultationDuration,
      },
    });

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: consultationName || 'Legal Consultation',
              description:
                consultationType === 'comprehensive'
                  ? 'A full hour with a senior lawyer to discuss your matter in detail, review documents, and provide tailored legal advice.'
                  : consultationType === 'after-hours'
                  ? 'For urgent consultations outside of regular business hours. Available M-F 5:30 PM - 9:00 PM and 9:00 AM - 12:00 PM Saturday and Sunday.'
                  : consultationType === 'targeted'
                  ? 'A focused 30-minute session for specific questions or a second opinion on your legal issue.'
                  : 'A quick consultation for urgent legal questions that need immediate guidance and direction.',
            },
            unit_amount: stripeAmount || 10000, // fallback to $100
          },
          quantity: 1,
        },
      ],
      customer: customer.id,
      customer_update: { address: 'auto' },
      metadata: {
        userId,
        name,
        phone,
        message,
        date,
        time,
        consultationType,
        consultationName,
        consultationPrice,
        consultationDuration,
        email,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking-cancelled`,
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
