import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://proficientlegal.com.au';

  // Define all the main routes
  const routes = [
    '',
    '/about-us',
    '/family-law',
    '/property-law',
    '/immigration-law',
    '/book-consultation',
    '/free-enquiry',
    '/testimonials',
    '/locations',
    '/teams',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
