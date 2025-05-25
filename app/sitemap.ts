import { MetadataRoute } from 'next';

// This would typically come from your database or CMS
async function getBlogPosts() {
  // Implement your blog post fetching logic here
  // For now, returning an empty array as placeholder
  return [];
}

// This would typically come from your database or CMS
async function getServicePages() {
  return [
    {
      url: '/family-law',
      lastModified: new Date(),
      images: [
        {
          url: '/family-law-hero.png',
          title: 'Family Law Services',
        },
        {
          url: '/family-consultation.png',
          title: 'Family Law Consultation',
        },
      ],
    },
    {
      url: '/property-law',
      lastModified: new Date(),
      images: [
        {
          url: '/property-law-process.png',
          title: 'Property Law Process',
        },
        {
          url: '/property-lawyer-consultation.png',
          title: 'Property Law Consultation',
        },
      ],
    },
    {
      url: '/immigration-law',
      lastModified: new Date(),
      images: [
        {
          url: '/immigration-hero.png',
          title: 'Immigration Law Services',
        },
        {
          url: '/immigration-consultation.png',
          title: 'Immigration Consultation',
        },
      ],
    },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://proficientlegal.com.au';

  // Get dynamic blog posts
  const blogPosts = await getBlogPosts();
  const servicePages = await getServicePages();

  // Define static routes with their priorities
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-consultation`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-enquiry`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/teams`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Map service pages to sitemap format
  const serviceRoutes = servicePages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
    // Add images to sitemap
    images: page.images.map((image) => ({
      url: `${baseUrl}${image.url}`,
      title: image.title,
    })),
  }));

  // Map blog posts to sitemap format (when implemented)
  const blogRoutes = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: post.images
      ? post.images.map((image: any) => ({
          url: `${baseUrl}${image.url}`,
          title: image.title,
        }))
      : [],
  }));

  // Combine all routes
  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
