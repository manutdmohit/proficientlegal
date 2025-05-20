import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Contact from '@/app/models/Contact';
import { z } from 'zod';

// Validation schema for contact form data
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  formType: z.enum(['contact', 'enquiry'])
});

export async function POST(request: Request) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();

    // Validate request data
    const validatedData = contactFormSchema.parse(body);

    // Create new contact form submission
    const contact = await Contact.create(validatedData);

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