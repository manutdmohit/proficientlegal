import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import connectDB from '@/app/config/database';
import User from '@/app/models/User';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log('Missing credentials');
            throw new Error('Please enter email and password');
          }

          await connectDB();
          console.log('Database connected');

          const user = await User.findOne({ email: credentials.email });
          console.log('User found:', user ? 'Yes' : 'No');

          if (!user) {
            console.log('No user found with email:', credentials.email);
            throw new Error('No user found with this email');
          }

          const isValid = await compare(credentials.password, user.password);
          console.log('Password valid:', isValid);

          if (!isValid) {
            console.log('Invalid password for user:', credentials.email);
            throw new Error('Invalid password');
          }

          // Check if user is an admin
          if (user.role !== 'admin') {
            console.log('User is not an admin:', user.role);
            throw new Error('Access denied. Admin privileges required.');
          }

          console.log('Authentication successful for:', credentials.email);
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error('Authentication error:', error);
          throw error;
        }
      },
    }),
  ],
  debug: true,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
});

export { handler as GET, handler as POST };
