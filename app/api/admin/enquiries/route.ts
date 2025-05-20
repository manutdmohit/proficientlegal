import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/app/config/database';
import Contact from '@/app/models/Contact';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const total = await Contact.countDocuments({ formType: 'enquiry' });
    const enquiries = await Contact.find({ formType: 'enquiry' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      enquiries,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { id, status } = await request.json();
    if (!id || !status) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    await connectDB();
    const enquiry = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!enquiry) {
      return new NextResponse('Enquiry not found', { status: 404 });
    }

    return NextResponse.json(enquiry);
  } catch (error) {
    console.error('Error updating enquiry:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
