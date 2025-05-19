import connectDB from '@/app/config/database';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ message: 'Hello, world!' });
    } catch (error) {
        return NextResponse.json({ message: 'Error', error }, { status: 500 });
    }
}


