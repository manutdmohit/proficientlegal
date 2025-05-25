import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Cache duration in seconds
const CACHE_DURATION = 60 * 60; // 1 hour

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    const response = NextResponse.next();

    // Add cache control headers
    response.headers.set(
      'Cache-Control',
      `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${
        CACHE_DURATION * 2
      }`
    );

    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
