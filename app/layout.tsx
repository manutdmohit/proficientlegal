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
        <meta name="theme-color" content="#0056a8" />
        <meta name="msapplication-TileColor" content="#0056a8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Proficient Legal" />
        <meta name="application-name" content="Proficient Legal" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-tooltip"
          content="Proficient Legal - Expert Legal Services"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-navbutton-color" content="#0056a8" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0056a8" />
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
