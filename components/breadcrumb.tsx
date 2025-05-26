'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb Component
 *
 * Displays a navigation breadcrumb with structured data for SEO.
 *
 * @component
 * @param {BreadcrumbProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  // Update breadcrumb schema with current items
  const currentBreadcrumbSchema = {
    ...breadcrumbSchema,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://proficientlegal.com.au${item.href}`,
    })),
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(currentBreadcrumbSchema),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-[#0056a8]"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="ml-2 text-[#0056a8] font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="ml-2 text-gray-500 hover:text-[#0056a8]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
