import type { Metadata } from 'next';

// Default metadata for the entire site
export const defaultMetadata: Metadata = {
  title: {
    default:
      'Proficient Legal | Family, Property & Immigration Law Specialists',
    template: '%s | Proficient Legal',
  },
  description:
    'Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia.',
  keywords:
    'law firm, family law, property law, immigration law, legal services, Sydney lawyers, Melbourne lawyers, Australian law firm, legal consultation, legal advice, legal representation',
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
      'Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia.',
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
