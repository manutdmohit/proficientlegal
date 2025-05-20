import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import User from '@/app/models/User';

export async function GET() {
  try {
    console.log('Starting admin user setup...');

    // Connect to database
    await connectDB();
    console.log('Connected to database');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@demo.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return NextResponse.json({
        status: 'success',
        message: 'Admin user already exists',
        user: {
          email: existingAdmin.email,
          name: existingAdmin.name,
          role: existingAdmin.role,
        },
      });
    }

    // Create admin user
    const hashedPassword = await hash('admin123', 12);
    const adminUser = await User.create({
      email: 'admin@demo.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    });

    console.log('Admin user created successfully');
    return NextResponse.json({
      status: 'success',
      message: 'Admin user created successfully',
      user: {
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      },
    });
  } catch (error) {
    console.error('Error in setup:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to setup admin user',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
