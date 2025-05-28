'use client';

import dynamic from 'next/dynamic';
import AnimationWrapper from '@/components/animation-wrapper';
import { LOCATIONS_CONFIG } from '@/lib/config/locations';
import { Location } from '@/types/location';
import { localBusinessSchema, faqSchema, serviceSchema } from '@/lib/schema';
import Script from 'next/script';
import { Breadcrumb } from '@/components/breadcrumb';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Dynamically import LocationCard with loading fallback
const LocationCard = dynamic(
  () => import('@/components/location-card').then((mod) => mod.LocationCard),
  {
    loading: () => (
      <div className="h-[400px] animate-pulse bg-gray-200 rounded-lg" />
    ),
    ssr: false, // Disable server-side rendering for better performance
  }
);

// Lazy load FAQ section
const FAQSection = lazy(() => import('@/components/faq-section'));

// Loading fallback component with skeleton UI
const LoadingFallback = () => (
  <div className="space-y-4">
    <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
    <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
    <div className="h-[400px] bg-gray-200 rounded-lg animate-pulse" />
  </div>
);

// Error fallback component
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <div className="p-4 bg-red-50 rounded-lg">
    <h3 className="text-red-800 font-semibold">Something went wrong</h3>
    <p className="text-red-600">{error.message}</p>
    <button
      onClick={resetErrorBoundary}
      className="mt-2 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200"
    >
      Try again
    </button>
  </div>
);

/**
 * LocationsSection Component
 *
 * Displays office locations with consultation services information.
 * Implements performance optimizations and SEO best practices.
 *
 * @component
 * @example
 * <LocationsSection />
 *
 * @returns {JSX.Element} Rendered component
 */
export function LocationsSection() {
  // Convert locations object to array for mapping
  const locations: Location[] = Object.values(LOCATIONS_CONFIG.locations);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
  ];

  return (
    <>
      {/* Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
        strategy="afterInteractive"
      />

      <section id="locations" className="py-16" aria-label="Office Locations">
        <div className="container">
          {/* Breadcrumb Navigation */}
          {/* <Breadcrumb items={breadcrumbItems} /> */}

          {/* Section heading with animation */}
          <AnimationWrapper animation="slideUp">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                Expert Legal Consultation Services in Sydney & Melbourne
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visit our leading law offices in Sydney CBD and Melbourne CBD.
                We provide comprehensive legal consultation services, including
                expert advice on family law, property law, and immigration
                matters. Our experienced lawyers offer personalized legal
                solutions and strategic guidance for your case. Book your
                consultation with our expert lawyers today for professional
                legal assistance.
              </p>
            </div>
          </AnimationWrapper>

          {/* Locations grid - responsive layout with 2 columns on desktop */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl">
              {locations.map((location, index) => (
                <AnimationWrapper
                  key={location.city}
                  animation="slideUp"
                  delay={0.2 * index}
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <LocationCard location={location} index={index} />
                  </Suspense>
                </AnimationWrapper>
              ))}
            </div>
          </ErrorBoundary>

          {/* FAQ Section */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <FAQSection />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
