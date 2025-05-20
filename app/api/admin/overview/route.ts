import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Get the start of the current year
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);

    // Aggregate monthly revenue for the current year
    const monthlyRevenue = await Payment.aggregate([
      {
        $match: {
          status: 'completed',
          createdAt: { $gte: startOfYear },
        },
      },
      {
        $group: {
          _id: { $month: '$createdAt' },
          total: { $sum: '$amount' },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    // Format the data for the chart
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const data = months.map((month, index) => {
      const monthData = monthlyRevenue.find((m) => m._id === index + 1);
      return {
        name: month,
        total: monthData ? monthData.total : 0,
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching overview data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
