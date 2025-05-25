import { Organization, WithContext } from 'schema-dts';

interface JsonLdProps {
  data: WithContext<Organization>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Example usage in a page:
/*
const organizationData: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Proficient Legal",
  "description": "Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia.",
  "url": "https://proficientlegal.com.au",
  "logo": "https://proficientlegal.com.au/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Legal Street",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "AU"
  },
  "telephone": "+61-2-1234-5678",
  "email": "contact@proficientlegal.com.au",
  "sameAs": [
    "https://www.facebook.com/proficientlegal",
    "https://www.linkedin.com/company/proficientlegal",
    "https://twitter.com/proficientlegal"
  ],
  "areaServed": "AU",
  "priceRange": "$$$"
}
*/
