import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/private/',
        '/booking-cancelled/',
        '/booking-success/',
      ],
    },
    sitemap: 'https://proficientlegal.com.au/sitemap.xml',
  };
}
