import type React from 'react';
import { Suspense } from 'react';
import ClientLayout from './ClientLayout';
import { defaultMetadata, homePageStructuredData } from './metadata';
import './globals.css';
import Script from 'next/script';
import { playfair, montserrat, gtWalsheim } from './fonts';
import LoadingSpinner from './components/LoadingSpinner';
import ClientToaster from './components/ClientToaster';

export const metadata = defaultMetadata;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} ${gtWalsheim.variable}`}
    >
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(homePageStructuredData)}
        </Script>
        <link rel="canonical" href="https://proficientlegal.com.au" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Sydney" />
        <meta name="geo.position" content="-33.8688;151.2093" />
        <meta name="ICBM" content="-33.8688, 151.2093" />
      </head>
      <body className={gtWalsheim.className} suppressHydrationWarning>
        <Suspense fallback={<LoadingSpinner />}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <ClientToaster />
      </body>
    </html>
  );
}
