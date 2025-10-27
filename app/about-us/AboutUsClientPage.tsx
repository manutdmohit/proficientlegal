'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  Building,
  Globe,
  Users,
  Scale,
  FileText,
  Heart,
  MessageSquare,
  Briefcase,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';

/**
 * About Us page component
 *
 * This page provides detailed information about Proficient Legal,
 * including their values, approach, and team.
 */
export default function AboutUsClientPage() {
  const [heroImageError, setHeroImageError] = useState(false);
  const [heroImageLoading, setHeroImageLoading] = useState(true);
  const [teamImageError, setTeamImageError] = useState(false);
  const [teamImageLoading, setTeamImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(
    '/sydney-opera-house-hq.png'
  );
  const [currentTeamImage, setCurrentTeamImage] = useState(
    '/legal-team-office.png'
  );

  // Implement smooth scrolling for anchor links
  useEffect(() => {
    try {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
          e.preventDefault();
          const href = this.getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        });
      });
    } catch (error) {
      console.error('Error setting up smooth scrolling:', error);
      setHasError(true);
    }
  }, []);

  // Debug team image loading
  useEffect(() => {
    console.log('Team image state:', {
      teamImageError,
      teamImageLoading,
      currentTeamImage,
    });
  }, [teamImageError, teamImageLoading, currentTeamImage]);

  // Error boundary fallback
  if (hasError) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#003b73] mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're experiencing some technical difficulties. Please try
              refreshing the page.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-[#0056a8] text-white hover:bg-[#003b73]"
            >
              Refresh Page
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="relative about-hero-section"
          aria-label="About Proficient Legal Hero Section"
        >
          {/* Semi-transparent gradient overlay to improve text readability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60 z-10"
          ></motion.div>

          {/* Background image container with fixed height */}
          <div className="relative h-[600px] w-full bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
            {!heroImageError ? (
              <>
                <Image
                  src={currentHeroImage}
                  alt="Sydney Opera House - Proficient Legal's headquarters in Sydney CBD, offering expert legal services in family law, property law, and immigration law"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={100}
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  onLoad={() => {
                    console.log('Hero image loaded successfully');
                    setHeroImageLoading(false);
                  }}
                  onError={(error) => {
                    console.error('Hero image failed to load:', error);
                    if (currentHeroImage === '/sydney-opera-house-hq.png') {
                      console.log('Trying fallback image...');
                      setCurrentHeroImage('/sydney-opera-house.png');
                      setHeroImageLoading(true);
                    } else {
                      setHeroImageError(true);
                      setHeroImageLoading(false);
                    }
                  }}
                />
                {/* Loading indicator */}
                {heroImageLoading && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-4xl font-bold mb-4">Proficient Legal</h1>
                  <p className="text-xl">Your Trusted Legal Partner</p>
                </div>
              </div>
            )}
          </div>

          {/* Content overlay positioned absolutely over the background image */}
          <div className="container absolute inset-0 flex items-center z-20 px-4 md:px-6">
            <div className="max-w-3xl text-white drop-shadow-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-shadow-lg">
                About Proficient Legal
              </h1>
              <p className="text-lg sm:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                A distinguished law firm providing comprehensive legal services
                in property, family, and immigration law.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="#contact">
                    <Button className="w-full sm:w-auto bg-white text-[#0056a8] hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 font-medium transition-all duration-300">
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link href="#services">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto bg-white text-[#0056a8] hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 font-medium transition-all duration-300"
                    >
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section
          className="py-12 sm:py-16 bg-white"
          aria-label="About Proficient Legal Introduction"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center">
              <AnimationWrapper animation="slideLeft">
                <div className="relative min-h-[600px] max-h-[600px] w-full rounded-lg overflow-hidden shadow-xl bg-gray-200 team-image-container">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0056a8]/30 to-transparent pointer-events-none"></div>
                  <Image
                    src="/legal-team-office.png"
                    alt="Proficient Legal Team - Our experienced lawyers specializing in family law, property law, and immigration law"
                    height={1000}
                    width={1000}
                    sizes="100vw"
                    objectFit="contain"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0056a8]/30 to-transparent pointer-events-none"></div>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideRight">
                <div className="px-4 sm:px-0 lg:px-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003b73] mb-4 tracking-slight">
                    Welcome to Proficient Legal
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Welcome to Proficient Legal, a distinguished law firm
                    nestled in the vibrant city of Sydney, Australia. Situated
                    in the heart of this bustling metropolis, we stand as a
                    pillar of legal expertise, providing individuals,
                    businesses, and organizations with comprehensive legal
                    services specializing in property, family, and immigration
                    law.
                  </p>
                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    role="list"
                    aria-label="Legal service tags"
                  >
                    <span
                      className="bg-gray-100 text-[#0056a8] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      role="listitem"
                    >
                      #LegalExcellence
                    </span>
                    <span
                      className="bg-gray-100 text-[#0056a8] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      role="listitem"
                    >
                      #SydneyLawyers
                    </span>
                    <span
                      className="bg-gray-100 text-[#0056a8] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      role="listitem"
                    >
                      #PropertyLaw
                    </span>
                    <span
                      className="bg-gray-100 text-[#0056a8] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      role="listitem"
                    >
                      #FamilyLaw
                    </span>
                    <span
                      className="bg-gray-100 text-[#0056a8] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      role="listitem"
                    >
                      #ImmigrationLaw
                    </span>
                  </div>
                  <div
                    className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6"
                    role="list"
                    aria-label="Contact information"
                  >
                    <div
                      className="flex items-center text-[#0056a8]"
                      role="listitem"
                    >
                      <Phone
                        className="h-5 w-5 mr-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <a
                        href="tel:1300011581"
                        className="font-medium text-sm sm:text-base hover:underline"
                      >
                        1300 011 581
                      </a>
                    </div>
                    <div
                      className="flex items-center text-[#0056a8]"
                      role="listitem"
                    >
                      <Mail
                        className="h-5 w-5 mr-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <a
                        href="mailto:info@proficientlegal.com.au"
                        className="font-medium text-sm sm:text-base break-all sm:break-normal hover:underline"
                      >
                        INFO@PROFICIENTLEGAL.COM.AU
                      </a>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-gray-50" aria-label="Our Legal Approach">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Our Approach
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Exceptional service rooted in attentive listening, pragmatic
                  solutions, and technical mastery.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <AnimationWrapper animation="slideUp" delay={0.1} threshold={0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <MessageSquare className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Attentive Listening
                  </h3>
                  <p className="text-gray-600">
                    At Proficient Legal, we understand that exceptional service
                    is rooted in attentive listening. We pride ourselves on
                    being pragmatic and diligent, ensuring that we carefully
                    consider your legal matters before delivering thoughtful
                    solutions. Our team has garnered a reputation for technical
                    mastery, a testament to their dedication and expertise in
                    navigating complex issues to pave the way for the right
                    solutions.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.2} threshold={0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Users className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Collaboration & Transparency
                  </h3>
                  <p className="text-gray-600">
                    A cornerstone of our approach is the cultivation of a
                    culture built on collaboration and transparency. This ethos
                    positions us as authentic leaders in law, allowing us to
                    bring added value to our clients and the community at large.
                    We are committed to fostering long-term relationships,
                    tailoring our services to accompany our clients at every
                    step of their journey.
                  </p>
                </div>
              </AnimationWrapper>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Scale className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Integrity & Respect
                  </h3>
                  <p className="text-gray-600">
                    Our commitment to respect extends to others, the law, and
                    the broader impact of our work. Guided by integrity, we lead
                    you through legal challenges with a pragmatic mindset,
                    ensuring the right outcomes and relieving you of any legal
                    concerns, enabling you to move forward with confidence.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.4}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Globe className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Multilingual Services
                  </h3>
                  <p className="text-gray-600">
                    Proficient Legal is proud to house a team of multilingual
                    lawyers proficient in English, Hindi, Urdu, Nepali, and
                    Bengali. This diversity in language ensures that we can
                    effectively communicate and cater to the unique needs of our
                    diverse clientele.
                  </p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-16 bg-white"
          aria-label="Our Legal Services"
        >
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Our Legal Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive legal expertise across property, family, and
                  immigration law.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Briefcase className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Property Law
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Expert guidance through property transactions, leasing, and
                    property disputes with a focus on protecting your interests
                    and ensuring smooth settlements.
                  </p>
                  <Link href="/property-law">
                    <Button
                      variant="outline"
                      className="w-full border-[#0056a8] text-[#0056a8] hover:bg-[#0056a8] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Heart className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Family Law
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Compassionate support through divorce, child custody, and
                    property settlements with a focus on achieving fair outcomes
                    and protecting your family's wellbeing.
                  </p>
                  <Link href="/family-law">
                    <Button
                      variant="outline"
                      className="w-full border-[#0056a8] text-[#0056a8] hover:bg-[#0056a8] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.3}>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <FileText className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Immigration Law
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Navigating the complexities of Australian immigration with
                    expertise in visa applications, appeals, and citizenship to
                    help you achieve your migration goals.
                  </p>
                  <Link href="/immigration-law">
                    <Button
                      variant="outline"
                      className="w-full border-[#0056a8] text-[#0056a8] hover:bg-[#0056a8] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <FloatingCTAButton />
    </div>
  );
}
