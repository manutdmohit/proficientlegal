import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-04-30.basil' });

export async function GET(req: NextRequest) {
  const session_id = req.nextUrl.searchParams.get('session_id');
  if (!session_id) return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  const session = await stripe.checkout.sessions.retrieve(session_id);
  return NextResponse.json(session);
} 