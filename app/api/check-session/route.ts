import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
})

export async function GET(request: Request) {
  try {
    // Get the session ID from the URL if it exists
    const url = new URL(request.url)
    const sessionId = url.searchParams.get('session_id')

    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      
      if (session.payment_status === 'paid') {
        // If payment is successful, redirect to success page
        return NextResponse.json({ url: '/success' })
      } else if (session.status === 'open') {
        // If session is still open, redirect back to Stripe
        return NextResponse.json({ url: session.url })
      }
    }

    return NextResponse.json({ url: null })
  } catch (error) {
    console.error('Error checking session:', error)
    return NextResponse.json({ error: 'Error checking session' }, { status: 500 })
  }
} 