import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import Payment from '@/app/models/Payment';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find all completed payments for the given date
    const bookedSlots = await Payment.find({
      consultationDate: {
        $gte: new Date(date),
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
      },
      status: 'completed',
    }).select('consultationTime consultationDuration');

    // Create a set of booked time slots
    const bookedTimeSlots = new Set();
    bookedSlots.forEach((slot) => {
      // Add the booked time slot
      bookedTimeSlots.add(slot.consultationTime);

      // If it's a comprehensive consultation (1 hour), also block the next hour
      if (slot.consultationDuration === '1 hr') {
        const [hours, minutes] = slot.consultationTime.split(':');
        const nextHour = `${(parseInt(hours) + 1)
          .toString()
          .padStart(2, '0')}:${minutes}`;
        bookedTimeSlots.add(nextHour);
      }
    });

    return NextResponse.json({
      bookedSlots: Array.from(bookedTimeSlots),
    });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
}
