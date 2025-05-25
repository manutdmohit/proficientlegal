import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface CacheOptions {
  duration?: number;
  staleWhileRevalidate?: number;
  tags?: string[];
}

export function withCache(
  handler: (req: NextRequest) => Promise<NextResponse>,
  options: CacheOptions = {}
) {
  const {
    duration = 60 * 60, // 1 hour
    staleWhileRevalidate = duration * 2,
    tags = [],
  } = options;

  return async function (req: NextRequest) {
    const response = await handler(req);

    // Add cache control headers
    response.headers.set(
      'Cache-Control',
      `public, s-maxage=${duration}, stale-while-revalidate=${staleWhileRevalidate}`
    );

    // Add cache tags if using a CDN that supports them
    if (tags.length > 0) {
      response.headers.set('Cache-Tag', tags.join(','));
    }

    return response;
  };
}

// Example usage in an API route:
/*
import { withCache } from '@/lib/cache'

export const GET = withCache(
  async (req: NextRequest) => {
    // Your API logic here
    return NextResponse.json({ data: 'example' })
  },
  {
    duration: 60 * 60, // 1 hour
    tags: ['api', 'example'],
  }
)
*/
