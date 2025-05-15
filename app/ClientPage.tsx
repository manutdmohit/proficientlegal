"use client"

import { useEffect } from "react"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { PracticeAreasSection } from "@/components/sections/practice-areas-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { AboutSection } from "@/components/sections/about-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TeamSection } from "@/components/sections/team-section"
import { CTASection } from "@/components/sections/cta-section"
import { LocationsSection } from "@/components/sections/locations-section"
import { ContactSection } from "@/components/sections/contact-section"
import { GoogleReviewsSlider } from "@/components/reviews/google-reviews-slider"
import ChatButton from "@/components/chat/chat-button"

/**
 * Home page component serving as the main landing page for the law firm website.
 *
 * This component:
 * 1. Composes all section components in a logical order
 * 2. Implements smooth scrolling for anchor links
 * 3. Provides a clean, component-based architecture
 *
 * The page follows a standard law firm website structure with:
 * - Hero section for immediate impact
 * - Practice areas to showcase services
 * - Features/benefits section
 * - About section for firm information
 * - Social proof via testimonials and Google reviews
 * - Team introduction
 * - Call-to-action for lead generation
 * - Office locations
 * - Contact information and form
 */
export default function Home() {
  /**
   * Effect hook to implement smooth scrolling for anchor links.
   * This improves user experience by animating the scroll to section targets
   * rather than jumping instantly.
   */
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    // Add structured data for the law firm
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Unified Lawyers",
      description:
        "Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia.",
      url: "https://unifiedlawyers.com.au",
      logo: "https://unifiedlawyers.com.au/unified-lawyers-logo.png",
      sameAs: [
        "https://www.facebook.com/unifiedlawyers",
        "https://www.linkedin.com/company/unified-lawyers",
        "https://twitter.com/unifiedlawyers",
      ],
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Sydney",
          addressRegion: "NSW",
          postalCode: "2000",
          streetAddress: "Level 5, 233 Castlereagh Street",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          streetAddress: "Level 4, 180 Queen Street",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Brisbane",
          addressRegion: "QLD",
          postalCode: "4000",
          streetAddress: "Level 10, 239 George Street",
        },
      ],
      telephone: "1300 011 581",
      email: "info@unifiedlawyers.com.au",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -33.8688,
          longitude: 151.2093,
        },
        geoRadius: "100000",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Family Law Services",
              description:
                "Expert guidance through divorce, child custody, property settlements, and all family law matters.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Property Law Services",
              description: "Comprehensive property law services for residential and commercial matters.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Immigration Law Services",
              description: "Navigating the complexities of Australian immigration law with expert guidance.",
            },
          },
        ],
      },
    }

    // Add the structured data to the page
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with navigation */}
      <Header />

      {/* Main content sections */}
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        {/* New Google Reviews section */}
        <GoogleReviewsSlider />
        <TeamSection />
        <CTASection />
        <LocationsSection />
        <ContactSection />
      </main>

      {/* Floating chat button for immediate assistance */}
      <ChatButton />
    </div>
  )
}
