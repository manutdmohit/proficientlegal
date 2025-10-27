import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Contact from '@/app/models/Contact';
import { z } from 'zod';
import { sendContactEmail } from '@/app/utils/sendgrid';

// Validation schema for contact form data
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  formType: z.enum(['contact', 'enquiry']),
});

export async function POST(request: Request) {
  try {
    // Connect to database
    try {
      await connectDB();
    } catch (dbError) {
      console.error('Database connection failed:', dbError);
      // Continue without database if connection fails
      // This allows the form to still work for email notifications
    }

    // Parse request body
    const body = await request.json();

    // Validate request data
    const validatedData = contactFormSchema.parse(body);

    // Create new contact form submission (only if database is available)
    let contact = null;
    try {
      contact = await Contact.create(validatedData);
    } catch (dbError) {
      console.warn(
        'Failed to save to database, but continuing with email notification'
      );
    }

    // Send email notification
    try {
      await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
        formType: validatedData.formType,
        subject: validatedData.subject,
      });
    } catch (emailError) {
      console.error('Error sending contact email:', emailError);
      // Don't throw the error as the contact is already saved
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', data: contact },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
