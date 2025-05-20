import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/app/config/database';
import Contact from '@/app/models/Contact';
import Payment from '@/app/models/Payment';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Fetch recent contacts and enquiries
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    // Fetch recent payments
    const payments = await Payment.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    // Combine and format the activities
    const activities = [
      ...contacts.map((contact) => ({
        id: contact._id,
        type: contact.formType,
        name: contact.name,
        email: contact.email,
        message: contact.message,
        timestamp: contact.createdAt,
      })),
      ...payments.map((payment) => ({
        id: payment._id,
        type: 'payment',
        name: payment.customerName,
        email: payment.customerEmail,
        amount: `$${payment.amount.toFixed(2)}`,
        description: payment.description,
        timestamp: payment.createdAt,
      })),
    ]
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
      .slice(0, 5); // Get only the 5 most recent activities

    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
