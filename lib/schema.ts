/**
 * Structured data schemas for SEO optimization
 */

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Proficient Legal',
  image: 'https://proficientlegal.com.au/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 1, 123 George Street',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    postalCode: '2000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.8688,
    longitude: 151.2093,
  },
  url: 'https://proficientlegal.com.au',
  telephone: '1300 011 581',
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-17:00',
  sameAs: [
    'https://www.facebook.com/proficientlegal',
    'https://www.linkedin.com/company/proficientlegal',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Family Law Services',
          description:
            'Expert family law services including divorce, child custody, and property settlements.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Law Services',
          description:
            'Comprehensive property law services including conveyancing, leasing, and property disputes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Immigration Law Services',
          description:
            'Professional immigration law services including visa applications and citizenship matters.',
        },
      },
    ],
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'LegalService',
    name: 'Proficient Legal',
  },
  serviceType: ['Legal Consultation', 'Legal Representation'],
  areaServed: {
    '@type': 'City',
    name: ['Sydney', 'Melbourne'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Family Law Consultation',
          description: 'Expert family law consultation services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Law Consultation',
          description: 'Professional property law consultation services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Immigration Law Consultation',
          description: 'Comprehensive immigration law consultation services',
        },
      },
    ],
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What legal services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer comprehensive legal services including family law, property law, and immigration law consultations. Our expert lawyers provide personalized solutions for all your legal needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are your offices located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have offices in Sydney CBD and Melbourne CBD, providing convenient access to legal services in both major cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I book a consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a consultation by calling our office at 1300 011 581 or by visiting our website to schedule an appointment online.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your consultation fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our consultation fees vary depending on the type of legal service required. We offer competitive rates and can provide a detailed fee structure during your initial consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer online consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer both in-person and online consultations to accommodate your needs and schedule. Our online consultations are conducted via secure video conferencing.',
      },
    },
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://proficientlegal.com.au',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Locations',
      item: 'https://proficientlegal.com.au/locations',
    },
  ],
};
