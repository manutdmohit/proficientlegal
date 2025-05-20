import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import connectDB from '@/app/config/database';
import User from '@/app/models/User';

export async function GET() {
  try {
    console.log('Starting admin user setup...');
    console.log('Connecting to database...');

    await connectDB();
    console.log('Database connected successfully');

    // Check if admin already exists
    console.log('Checking for existing admin user...');
    const existingAdmin = await User.findOne({ email: 'admin@demo.com' });
    console.log(
      'Existing admin check result:',
      existingAdmin ? 'Found' : 'Not found'
    );

    if (existingAdmin) {
      console.log('Admin user already exists, skipping creation');
      return NextResponse.json({ message: 'Admin user already exists' });
    }

    // Create admin user
    console.log('Creating new admin user...');
    const hashedPassword = await hash('admin123', 12);
    const newAdmin = await User.create({
      email: 'admin@demo.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    });
    console.log('Admin user created successfully:', newAdmin.email);

    return NextResponse.json({
      message: 'Admin user created successfully',
      user: {
        email: newAdmin.email,
        name: newAdmin.name,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json(
      {
        error: 'Failed to create admin user',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
