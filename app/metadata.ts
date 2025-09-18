import type { Metadata } from 'next';

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  title: {
    default:
      'Best Lawyers in Australia | Top Legal Services | Proficient Legal',
    template: '%s | Proficient Legal - Expert Legal Services Australia',
  },
  description:
    "Australia's leading law firm offering expert legal services in family law, property law, and immigration law. Find the best lawyers in Sydney, Melbourne, and across Australia for professional legal consultation. Multilingual lawyers including Nepali-speaking legal professionals.",
  // Note: Meta keywords are ignored by Google since 2009
  // Focus on title, description, and content optimization instead
  authors: [{ name: 'Proficient Legal' }],
  creator: 'Proficient Legal',
  publisher: 'Proficient Legal',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://proficientlegal.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://proficientlegal.com.au',
    siteName: 'Proficient Legal',
    title: 'Proficient Legal | Family, Property & Immigration Law Specialists',
    description:
      'Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia. Multilingual lawyers including Nepali-speaking legal professionals.',
    images: [
      {
        url: 'https://proficientlegal.com.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal - Legal Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proficient Legal | Family, Property & Immigration Law Specialists',
    description:
      'Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia.',
    images: ['https://proficientlegal.com.au/twitter-image.jpg'],
    creator: '@proficientlegal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'Legal Services',
  other: {
    'geo.region': 'AU',
    'geo.placename': 'Sydney',
    'geo.position': '-33.8688;151.2093',
    ICBM: '-33.8688, 151.2093',
    language: 'en, ne, hi, ur, bn',
    audience: 'Nepali community, multicultural communities, legal services',
    'target-audience': 'Nepali speakers, immigrants, multicultural families',
    'revisit-after': '7 days',
    distribution: 'global',
    rating: 'general',
    expires: 'never',
    'cache-control': 'public, max-age=31536000',
    'content-language': 'en-AU',
    'content-type': 'text/html; charset=utf-8',
  },
};

// Add Sydney-specific metadata
export const sydneyMetadata: Metadata = {
  title:
    'Best Lawyers in Sydney | Top Legal Services Sydney CBD | Proficient Legal',
  description:
    "Sydney's premier law firm offering expert legal services in family law, property law, and immigration law. Find the best lawyers in Sydney CBD for professional legal consultation. Expert Nepali-speaking lawyers available for the Nepali community.",
  // Meta keywords removed - focus on content optimization
  alternates: {
    canonical: '/sydney',
  },
  openGraph: {
    title:
      'Best Lawyers in Sydney | Top Legal Services Sydney CBD | Proficient Legal',
    description:
      "Sydney's premier law firm offering expert legal services in family law, property law, and immigration law. Find the best lawyers in Sydney CBD for professional legal consultation.",
    url: 'https://proficientlegal.com.au/sydney',
    images: [
      {
        url: 'https://proficientlegal.com.au/sydney-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Sydney Office - Best Lawyers in Sydney',
      },
    ],
  },
};

// Add Melbourne-specific metadata
export const melbourneMetadata: Metadata = {
  title:
    'Best Lawyers in Melbourne | Top Legal Services Melbourne | Proficient Legal',
  description:
    "Melbourne's trusted law firm providing expert legal services in family law, property law, and immigration law. Find the best lawyers in Melbourne for professional legal consultation. Expert Nepali-speaking lawyers available for the Nepali community.",
  // Meta keywords removed - focus on content optimization
  alternates: {
    canonical: '/melbourne',
  },
  openGraph: {
    title:
      'Best Lawyers in Melbourne | Top Legal Services Melbourne | Proficient Legal',
    description:
      "Melbourne's trusted law firm providing expert legal services in family law, property law, and immigration law. Find the best lawyers in Melbourne for professional legal consultation.",
    url: 'https://proficientlegal.com.au/melbourne',
    images: [
      {
        url: 'https://proficientlegal.com.au/melbourne-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Melbourne Office - Best Lawyers in Melbourne',
      },
    ],
  },
};

// Add Hurstville-specific metadata
export const hurstvilleMetadata: Metadata = {
  title:
    'Best Lawyers in Hurstville NSW | Legal Services Hurstville | Proficient Legal',
  description:
    'Expert legal services in Hurstville NSW. Specializing in family law, property law, and immigration law. Find the best lawyers in Hurstville for professional legal consultation.',
  keywords:
    'lawyer in Hurstville NSW, law firm in Hurstville, legal services in New South Wales, family law experts in Hurstville, property law Hurstville, immigration help Hurstville, NSW property law specialists, legal support Sydney South',
  alternates: {
    canonical: '/hurstville',
  },
  openGraph: {
    title:
      'Best Lawyers in Hurstville NSW | Legal Services Hurstville | Proficient Legal',
    description:
      'Expert legal services in Hurstville NSW. Specializing in family law, property law, and immigration law. Find the best lawyers in Hurstville for professional legal consultation.',
    url: 'https://proficientlegal.com.au/hurstville',
    images: [
      {
        url: 'https://proficientlegal.com.au/hurstville-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Hurstville Office - Best Lawyers in Hurstville NSW',
      },
    ],
  },
};

// Metadata for the Family Law page
export const familyLawMetadata: Metadata = {
  title:
    'Proficient Legal | Family Law Services | Divorce, Child Custody & Property Settlements',
  description:
    'Expert family law services in Australia. We provide compassionate guidance through divorce, child custody, property settlements, and all family law matters.',
  keywords:
    'family law, divorce lawyer, child custody, property settlement, family court, separation, parenting arrangements, family lawyer Sydney, family lawyer Melbourne, family lawyer Brisbane',
  alternates: {
    canonical: '/family-law',
  },
  openGraph: {
    title:
      'Proficient Legal |  Family Law Services | Divorce, Child Custody & Property Settlements',
    description:
      'Expert family law services in Australia. We provide compassionate guidance through divorce, child custody, property settlements, and all family law matters.',
    url: 'https://proficientlegal.com.au/family-law',
    images: [
      {
        url: 'https://proficientlegal.com.au/family-law-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Family Law Services',
      },
    ],
  },
  twitter: {
    title:
      'Proficient Legal | Family Law Services | Divorce, Child Custody & Property Settlements',
    description:
      'Expert family law services in Australia. We provide compassionate guidance through divorce, child custody, property settlements, and all family law matters.',
    images: ['https://proficientlegal.com.au/family-law-twitter.jpg'],
  },
};

// Metadata for the Property Law page
export const propertyLawMetadata: Metadata = {
  title:
    'Proficient Legal |  Property Law Services | Conveyancing, Leasing & Property Disputes',
  description:
    'Comprehensive property law services in Australia. Expert guidance for property transactions, leasing, and property disputes with a focus on protecting your interests.',
  keywords:
    'property law, conveyancing, real estate law, property transactions, leasing, property disputes, property lawyer Sydney, property lawyer Melbourne',
  alternates: {
    canonical: '/property-law',
  },
  openGraph: {
    title:
      'Proficient Legal | Property Law Services | Conveyancing, Leasing & Property Disputes',
    description:
      'Comprehensive property law services in Australia. Expert guidance for property transactions, leasing, and property disputes with a focus on protecting your interests.',
    url: 'https://proficientlegal.com.au/property-law',
    images: [
      {
        url: 'https://proficientlegal.com.au/property-law-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Property Law Services',
      },
    ],
  },
  twitter: {
    title:
      'Proficient Legal | Property Law Services | Conveyancing, Leasing & Property Disputes',
    description:
      'Comprehensive property law services in Australia. Expert guidance for property transactions, leasing, and property disputes with a focus on protecting your interests.',
    images: ['https://proficientlegal.com.au/property-law-twitter.jpg'],
  },
};

// Metadata for the Immigration Law page
export const immigrationLawMetadata: Metadata = {
  title:
    'Proficient Legal | Immigration Law Services | Visas, Citizenship & Migration Support',
  description:
    'Expert immigration law services in Australia. Navigating the complexities of Australian immigration with expertise in visa applications, appeals, and citizenship.',
  keywords:
    'immigration law, visa applications, Australian citizenship, migration agent, partner visa, skilled migration, business visa, student visa, immigration lawyer Sydney, immigration lawyer Melbourne',
  alternates: {
    canonical: '/immigration-law',
  },
  openGraph: {
    title:
      'Proficient Legal | Immigration Law Services | Visas, Citizenship & Migration Support',
    description:
      'Expert immigration law services in Australia. Navigating the complexities of Australian immigration with expertise in visa applications, appeals, and citizenship.',
    url: 'https://proficientlegal.com.au/immigration-law',
    images: [
      {
        url: 'https://proficientlegal.com.au/immigration-law-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Immigration Law Services',
      },
    ],
  },
  twitter: {
    title:
      'Proficient Legal | Immigration Law Services | Visas, Citizenship & Migration Support',
    description:
      'Expert immigration law services in Australia. Navigating the complexities of Australian immigration with expertise in visa applications, appeals, and citizenship.',
    images: ['https://proficientlegal.com.au/immigration-law-twitter.jpg'],
  },
};

// Metadata for the About Us page
export const aboutUsMetadata: Metadata = {
  title: 'Proficient Legal | About Us | Our Team, Values & Approach',
  description:
    'Learn about Proficient Legal, a distinguished law firm providing comprehensive legal services in property, family, and immigration law across Australia.',
  keywords:
    'about Proficient Legal, law firm history, legal team, law firm values, Australian lawyers, legal expertise, multilingual lawyers, Sydney law firm, Melbourne law firm',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'Proficient Legal | About Us | Our Team, Values & Approach',
    description:
      'Learn about Proficient Legal, a distinguished law firm providing comprehensive legal services in property, family, and immigration law across Australia.',
    url: 'https://proficientlegal.com.au/about-us',
    images: [
      {
        url: 'https://proficientlegal.com.au/about-us-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal About Us',
      },
    ],
  },
  twitter: {
    title: 'Proficient Legal | About Us | Our Team, Values & Approach',
    description:
      'Learn about Proficient Legal, a distinguished law firm providing comprehensive legal services in property, family, and immigration law across Australia.',
    images: ['https://proficientlegal.com.au/about-us-twitter.jpg'],
  },
};

// Metadata for the Teams page
export const teamsMetadata: Metadata = {
  title: 'Proficient Legal | Our Legal Team | Expert Lawyers in Australia',
  description:
    'Meet our team of experienced lawyers specializing in family, property, and immigration law. Dedicated professionals committed to your legal success.',
  keywords:
    'legal team, Australian lawyers, expert attorneys, family lawyers, property lawyers, immigration lawyers, law specialists, legal professionals, Sydney lawyers, Melbourne lawyers',
  alternates: {
    canonical: '/teams',
  },
  openGraph: {
    title: 'Proficient Legal | Our Legal Team | Expert Lawyers in Australia',
    description:
      'Meet our team of experienced lawyers specializing in family, property, and immigration law. Dedicated professionals committed to your legal success.',
    url: 'https://proficientlegal.com.au/teams',
    images: [
      {
        url: 'https://proficientlegal.com.au/teams-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Team',
      },
    ],
  },
  twitter: {
    title: 'Proficient Legal | Our Legal Team | Expert Lawyers in Australia',
    description:
      'Meet our team of experienced lawyers specializing in family, property, and immigration law. Dedicated professionals committed to your legal success.',
    images: ['https://proficientlegal.com.au/teams-twitter.jpg'],
  },
};

// Metadata for the Locations page
export const locationsMetadata: Metadata = {
  title: 'Proficient Legal | Our Locations | Sydney, Melbourne & Brisbane',
  description:
    'Visit our law offices in Sydney, Melbourne, and Brisbane. Convenient locations providing expert legal services across Australia.',
  keywords:
    'law firm locations, Sydney office, Melbourne office, Brisbane office, legal office locations, Australian law firm, legal consultation locations, lawyer offices',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Proficient Legal | Our Locations | Sydney, Melbourne & Brisbane',
    description:
      'Visit our law offices in Sydney, Melbourne, and Brisbane. Convenient locations providing expert legal services across Australia.',
    url: 'https://proficientlegal.com.au/locations',
    images: [
      {
        url: 'https://proficientlegal.com.au/locations-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Locations',
      },
    ],
  },
  twitter: {
    title: 'Proficient Legal | Our Locations | Sydney, Melbourne & Brisbane',
    description:
      'Visit our law offices in Sydney, Melbourne, and Brisbane. Convenient locations providing expert legal services across Australia.',
    images: ['https://proficientlegal.com.au/locations-twitter.jpg'],
  },
};

// Metadata for the Blog page
// Homepage structured data for SEO
export const homePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Proficient Legal',
  description:
    "Australia's leading law firm offering expert legal services in family law, property law, and immigration law. Multilingual lawyers including Nepali-speaking legal professionals.",
  url: 'https://proficientlegal.com.au',
  logo: 'https://proficientlegal.com.au/logo.png',
  sameAs: [
    'https://www.facebook.com/proficientlegal',
    'https://www.linkedin.com/company/proficientlegal',
    'https://twitter.com/proficientlegal',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '2000',
      addressCountry: 'AU',
      streetAddress: 'Level 1, 123 George Street',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      postalCode: '3000',
      addressCountry: 'AU',
      streetAddress: 'Level 1, 456 Collins Street',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Hurstville',
      addressRegion: 'NSW',
      postalCode: '2220',
      addressCountry: 'AU',
      streetAddress: 'Level 1, 789 Forest Road',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Sydney',
    },
    {
      '@type': 'City',
      name: 'Melbourne',
    },
    {
      '@type': 'City',
      name: 'Hurstville',
    },
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
            'Expert family law services including divorce, child custody, and property settlements. Available in English, Nepali, Hindi, Urdu, and Bengali.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Law Services',
          description:
            'Comprehensive property law services including conveyancing, leasing, and property disputes. Available in English, Nepali, Hindi, Urdu, and Bengali.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Immigration Law Services',
          description:
            'Expert immigration law services including visa applications, citizenship, and migration support. Available in English, Nepali, Hindi, Urdu, and Bengali.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nepali Legal Services',
          description:
            'Specialized legal services for the Nepali community in Australia, including family law, immigration law, and property law consultations in Nepali language.',
        },
      },
    ],
  },
  review: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  telephone: '+61212345678',
  email: 'contact@proficientlegal.com.au',
  availableLanguage: ['English', 'Nepali', 'Hindi', 'Urdu', 'Bengali'],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093,
    },
    geoRadius: '1000000',
  },
};

export const blogMetadata: Metadata = {
  title: 'Proficient Legal | Legal Insights & Updates | Law Blog',
  description:
    'Stay informed with our legal blog covering family law, property law, immigration updates, and expert insights from our experienced lawyers.',
  keywords:
    'legal blog, law updates, legal insights, family law blog, property law news, immigration updates, Australian law blog, legal articles, law firm blog',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Proficient Legal | Legal Insights & Updates | Law Blog',
    description:
      'Stay informed with our legal blog covering family law, property law, immigration updates, and expert insights from our experienced lawyers.',
    url: 'https://proficientlegal.com.au/blog',
    images: [
      {
        url: 'https://proficientlegal.com.au/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Blog',
      },
    ],
  },
  twitter: {
    title: 'Proficient Legal | Legal Insights & Updates | Law Blog',
    description:
      'Stay informed with our legal blog covering family law, property law, immigration updates, and expert insights from our experienced lawyers.',
    images: ['https://proficientlegal.com.au/blog-twitter.jpg'],
  },
};

// Metadata for the Testimonials page
export const testimonialsMetadata: Metadata = {
  title: 'Proficient Legal | Client Testimonials | Trusted Legal Services',
  description:
    'Read client testimonials and reviews about Proficient Legal. Hear from our satisfied clients about our expert legal services in family, property, and immigration law.',
  keywords:
    'client testimonials, legal reviews, law firm reviews, family law testimonials, property law reviews, immigration law testimonials, trusted legal services',
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Proficient Legal | Client Testimonials | Trusted Legal Services',
    description:
      'Read client testimonials and reviews about Proficient Legal. Hear from our satisfied clients about our expert legal services in family, property, and immigration law.',
    url: 'https://proficientlegal.com.au/testimonials',
    images: [
      {
        url: 'https://proficientlegal.com.au/testimonials-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Proficient Legal Client Testimonials',
      },
    ],
  },
  twitter: {
    title: 'Proficient Legal | Client Testimonials | Trusted Legal Services',
    description:
      'Read client testimonials and reviews about Proficient Legal. Hear from our satisfied clients about our expert legal services in family, property, and immigration law.',
    images: ['https://proficientlegal.com.au/testimonials-twitter.jpg'],
  },
};
