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

    // Get current date and date 30 days ago
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Calculate total contacts (all time)
    const totalContacts = await Contact.countDocuments({ formType: 'contact' });

    // Calculate active enquiries (status is 'new' or 'in-progress')
    const activeEnquiries = await Contact.countDocuments({
      formType: 'enquiry',
      status: { $in: ['new', 'in-progress'] },
    });

    // Calculate total revenue (all time)
    const totalRevenue = await Payment.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);

    // Calculate conversion rate
    // Conversion rate = (Number of completed enquiries / Total enquiries) * 100
    const totalEnquiries = await Contact.countDocuments({
      formType: 'enquiry',
    });
    const completedEnquiries = await Contact.countDocuments({
      formType: 'enquiry',
      status: 'completed',
    });

    const conversionRate =
      totalEnquiries > 0 ? (completedEnquiries / totalEnquiries) * 100 : 0;

    // Calculate month-over-month changes
    const lastMonthContacts = await Contact.countDocuments({
      formType: 'contact',
      createdAt: { $lt: thirtyDaysAgo },
    });
    const lastMonthEnquiries = await Contact.countDocuments({
      formType: 'enquiry',
      status: { $in: ['new', 'in-progress'] },
      createdAt: { $lt: thirtyDaysAgo },
    });
    const lastMonthRevenue = await Payment.aggregate([
      {
        $match: {
          status: 'completed',
          createdAt: { $lt: thirtyDaysAgo },
        },
      },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);
    const lastMonthCompletedEnquiries = await Contact.countDocuments({
      formType: 'enquiry',
      status: 'completed',
      createdAt: { $lt: thirtyDaysAgo },
    });
    const lastMonthTotalEnquiries = await Contact.countDocuments({
      formType: 'enquiry',
      createdAt: { $lt: thirtyDaysAgo },
    });
    const lastMonthConversionRate =
      lastMonthTotalEnquiries > 0
        ? (lastMonthCompletedEnquiries / lastMonthTotalEnquiries) * 100
        : 0;

    // Calculate percentage changes
    const contactsChange =
      lastMonthContacts > 0
        ? ((totalContacts - lastMonthContacts) / lastMonthContacts) * 100
        : 0;
    const enquiriesChange =
      lastMonthEnquiries > 0
        ? ((activeEnquiries - lastMonthEnquiries) / lastMonthEnquiries) * 100
        : 0;
    const revenueChange =
      lastMonthRevenue[0]?.total > 0
        ? ((totalRevenue[0]?.total - lastMonthRevenue[0]?.total) /
            lastMonthRevenue[0]?.total) *
          100
        : 0;
    const conversionRateChange =
      lastMonthConversionRate > 0
        ? conversionRate - lastMonthConversionRate
        : 0;

    return NextResponse.json({
      totalContacts: {
        value: totalContacts,
        change: contactsChange,
      },
      activeEnquiries: {
        value: activeEnquiries,
        change: enquiriesChange,
      },
      totalRevenue: {
        value: totalRevenue[0]?.total || 0,
        change: revenueChange,
      },
      conversionRate: {
        value: conversionRate,
        change: conversionRateChange,
      },
    });
  } catch (error) {
    console.error('Error calculating metrics:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
