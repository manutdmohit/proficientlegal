import { hash } from 'bcryptjs';
import connectDB from '../app/config/database';
import User from '../app/models/User';

async function createAdminUser() {
  try {
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@demo.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await hash('admin123', 12);
    await User.create({
      email: 'admin@demo.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    });

    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

createAdminUser();
