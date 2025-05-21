import { NextResponse } from 'next/server';
import { sendEmail } from '@/services/email-service';

console.log('Email API route module loaded');

export async function GET() {
  console.log('GET request received on email API route');
  return NextResponse.json({ message: 'Email API is working' });
}

export async function POST(request: Request) {
  console.log('POST request received on email API route');
  try {
    console.log('Parsing request body...');
    const body = await request.json();
    console.log('Request body parsed:', body);

    const { to, subject, text, html } = body;

    if (!to || !subject) {
      console.log('Missing required fields:', { to, subject });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Calling sendEmail function...');
    await sendEmail({
      to,
      from: {
        email: process.env.SENDER_EMAIL!,
        name: 'Proficient Legal',
      },
      subject,
      text,
      html,
    });

    console.log('Email sent successfully, returning response');
    return NextResponse.json({
      message: 'Email sent successfully',
      data: { to, subject },
    });
  } catch (error: any) {
    console.error('Detailed error in email API:', {
      error,
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
