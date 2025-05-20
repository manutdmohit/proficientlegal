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
                  : 'A focused 30-minute session for specific questions or a second opinion on your legal issue.',
            },
            unit_amount: stripeAmount || 10000, // fallback to $100
          },
          quantity: 1,
        },
      ],
      customer_email: email,
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
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking-cancelled`,
      payment_intent_data: {
        receipt_email: email,
      },
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
