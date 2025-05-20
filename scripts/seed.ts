import { hash } from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../app/models/User';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(MONGODB_URI as string, {
    bufferCommands: false,
  });
}

async function seed() {
  try {
    console.log('🌱 Starting database seed...');

    // Connect to database
    await connectDB();
    console.log('✅ Connected to database');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@demo.com' });
    if (existingAdmin) {
      console.log('ℹ️ Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    console.log('👤 Creating admin user...');
    const hashedPassword = await hash('admin123', 12);
    const adminUser = await User.create({
      email: 'admin@demo.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    });

    console.log('✅ Admin user created successfully');
    console.log('📝 Admin details:');
    console.log('   Email:', adminUser.email);
    console.log('   Name:', adminUser.name);
    console.log('   Role:', adminUser.role);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();
