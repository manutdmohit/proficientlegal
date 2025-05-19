import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Contact from '@/app/models/Contact';
import { sendEmail } from '@/app/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();

    // Create contact record
    const contact = await Contact.create(body);

    // Send email notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone}
        Message: ${body.message}
      `,
    });

    // Send confirmation email to user
    await sendEmail({
      to: body.email,
      subject: 'Thank you for contacting Proficient Legal',
      text: `
        Dear ${body.name},

        Thank you for contacting Proficient Legal. We have received your message and will get back to you shortly.

        Best regards,
        Proficient Legal Team
      `,
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 