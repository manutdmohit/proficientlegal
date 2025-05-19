import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Attempt to connect to the database
    const db = await connectDB();
    
    // Check if the connection is successful
    if (!db) {
      throw new Error('Failed to connect to database');
    }

    // Get connection state
    const state = mongoose.connection.readyState;
    const stateMap = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };

    // Return connection status and details
    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      details: {
        state: stateMap[state as keyof typeof stateMap],
        host: mongoose.connection.host,
        name: mongoose.connection.name,
        port: mongoose.connection.port
      }
    });
  } catch (error: any) {
    console.error('Database connection test failed:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message
    }, { status: 500 });
  }
} 