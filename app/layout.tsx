import type React from "react"
import ClientLayout from "./ClientLayout"
import { defaultMetadata } from "./metadata"
import './globals.css'
import Script from "next/script"
import { playfair, montserrat, gtWalsheim } from "./fonts"
import { Toaster } from 'sonner'

export const metadata = defaultMetadata

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} ${gtWalsheim.variable}`}
    >
      <head>
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Proficient Legal",
            url: "https://proficientlegal.com.au",
            logo: "https://proficientlegal.com.au/logo.png",
            telephone: "1300 011 581",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Address",
              addressLocality: "Sydney",
              addressRegion: "NSW",
              postalCode: "2000",
              addressCountry: "AU",
            },
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://www.linkedin.com/company/yourcompany"
            ]
          })}
        </Script>
      </head>
      <body className={gtWalsheim.className}>
        <ClientLayout>{children}</ClientLayout>
        <Toaster 
          position="top-right"
          expand={true}
          richColors
          closeButton
        />
      </body>
    </html>
  )
}