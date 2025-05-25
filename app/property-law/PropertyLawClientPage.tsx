'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Home,
  Building2,
  FileCodeIcon as FileContract,
  Package,
  FileEdit,
  ClipboardList,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import ChatButton from '@/components/chat/chat-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';

/**
 * Property Law page component
 *
 * This page provides detailed information about Proficient Legal's property law services,
 * including their approach, expertise, and specific property-related services.
 */
export default function PropertyLawClientPage() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          'href'
        );
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative">
          {/* Semi-transparent gradient overlay to improve text readability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60 z-10"
          ></motion.div>

          {/* Background image container with fixed height */}
          <div className="relative h-[600px]">
            <Image
              src="/modern-real-estate-city.png"
              alt="Property law and real estate services in ACT and NSW"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
          </div>

          {/* Content overlay positioned absolutely over the background image */}
          <div className="container absolute inset-0 flex items-center z-20">
            <div className="max-w-3xl text-white drop-shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-shadow-lg">
                Property Law & Real Estate Services in ACT & NSW
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                Proficient Legal provides expert legal guidance for all your
                property transactions and real estate matters in ACT and NSW.
                Our experienced property lawyers ensure your interests are
                protected from contract to settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/book-consultation">
                    <Button className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3 font-medium">
                      Book Consultation
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
                      className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3 font-medium"
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
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimationWrapper animation="slideLeft">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/real-estate-discussion.png"
                    alt="Property law consultation with a lawyer in Australia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0056a8]/30 to-transparent"></div>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideRight">
                <div>
                  <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                    Comprehensive Property Law Solutions
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Proficient Legal's Property Division specializes in
                    providing comprehensive legal support for property-related
                    matters in the ACT and NSW regions. Our experienced team
                    guides you through every step of your property transaction
                    with expertise and attention to detail.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Whether you're buying your first home, investing in
                    commercial property, or developing real estate, our property
                    lawyers ensure your interests are protected and the process
                    runs smoothly from contract to settlement.
                  </p>
                  <p className="text-gray-600 mb-6">
                    With our fixed-fee approach and commitment to clear
                    communication, you'll have complete transparency throughout
                    your property transaction, allowing you to make informed
                    decisions with confidence.
                  </p>
                  <div className="flex items-center text-[#0056a8]">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">1300 123 456</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/family-law"
                      className="text-[#0056a8] underline font-medium"
                    >
                      Learn more about our Family Law services
                    </Link>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Our Property Law & Real Estate Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive legal support tailored to your property needs in
                  ACT and NSW, including residential conveyancing, commercial
                  property, leasing, and property disputes.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Home className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Residential Conveyancing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Assistance with residential property transactions,
                      ensuring a smooth process from contract to settlement.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Contract review and advice</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Title searches and property reports</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Settlement coordination</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Service 2 */}
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Building2 className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Commercial Conveyancing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Legal guidance for buying or selling commercial
                      properties, protecting clients' interests throughout the
                      transaction.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Due diligence investigations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Commercial lease reviews</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Business asset transfers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Service 3 */}
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <FileContract className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Off-the-Plan Contracts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Support in navigating off-the-plan contracts, providing
                      clarity and assurance in this area of property law.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Contract clause analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sunset clause protection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developer negotiation support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Service 4 */}
              <AnimationWrapper animation="slideUp" delay={0.4}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Package className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      House and Land Packages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Strategic advice on house and land packages, safeguarding
                      clients' interests in significant transactions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Builder contract review</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Land title verification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Construction milestone advice</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Service 5 */}
              <AnimationWrapper animation="slideUp" delay={0.5}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <FileEdit className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Variations to Crown Leases
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Expertise in handling variations to crown leases, ensuring
                      a streamlined process tailored to specific requirements.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Lease condition assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Variation application assistance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Government liaison services</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Service 6 */}
              <AnimationWrapper animation="slideUp" delay={0.6}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <ClipboardList className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Development Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Assistance in preparing and navigating development
                      applications, guiding clients through the regulatory
                      landscape for compliance and efficiency.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Planning regulation advice</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Application documentation review</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Council negotiation support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-white">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Our Property Law Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We guide you through every step of your property transaction
                  with expertise and clarity.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimationWrapper animation="slideLeft">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/property-law-process.png"
                    alt="Property Law Process"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideRight">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Initial Consultation
                        </h3>
                        <p className="text-gray-600">
                          We discuss your property needs, explain our process,
                          and provide a clear fee structure with no hidden
                          costs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Contract Review
                        </h3>
                        <p className="text-gray-600">
                          Our property lawyers thoroughly review all contracts,
                          identifying potential issues and explaining key terms
                          in plain language.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Due Diligence
                        </h3>
                        <p className="text-gray-600">
                          We conduct comprehensive searches and investigations
                          to ensure there are no unexpected issues with the
                          property.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Settlement Preparation
                        </h3>
                        <p className="text-gray-600">
                          We prepare all necessary documentation and coordinate
                          with all parties to ensure a smooth settlement
                          process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">5</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Settlement & Post-Settlement
                        </h3>
                        <p className="text-gray-600">
                          We attend settlement on your behalf and handle all
                          post-settlement matters, including registration of
                          transfer and notification to relevant authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Why Choose Our Property Law Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Experience the difference with Proficient Legal's dedicated
                  property team.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <MapPin className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    Our team has extensive knowledge of ACT and NSW property
                    markets and regulations, providing you with
                    location-specific advice that matters.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0056a8]"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Fixed-Fee Structure
                  </h3>
                  <p className="text-gray-600">
                    We offer transparent, fixed-fee services so you know exactly
                    what you're paying for with no surprise costs or hidden
                    charges.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.3}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0056a8]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Risk Management
                  </h3>
                  <p className="text-gray-600">
                    Our proactive approach identifies and addresses potential
                    issues before they become problems, protecting your
                    investment and peace of mind.
                  </p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-info" className="py-16 bg-white">
          <div className="container">
            <div className="bg-[#0056a8] rounded-xl p-8 md:p-12 shadow-lg text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 tracking-slight">
                    Ready to Discuss Your Property Matter?
                  </h2>
                  <p className="mb-6 text-white/90">
                    Our team of experienced property lawyers are here to help.
                    Contact us today for a confidential consultation and take
                    the first step toward a smooth property transaction.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <p className="text-white/90">1300 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <p className="text-white/90">
                          info@proficientlegal.com.au
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/book-consultation">
                      <Button className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3 font-medium">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book a Consultation
                      </Button>
                    </Link>
                    <Link href="tel:1300123456">
                      <Button
                        variant="outline"
                        className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3 font-medium"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/property-lawyer-consultation.png"
                    alt="Property Lawyer Consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about property law and our
                  services.
                </p>
              </div>
            </AnimationWrapper>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <FaqAccordion
                  items={[
                    {
                      question:
                        'How long does a typical property settlement take?',
                      answer:
                        'In ACT and NSW, a standard property settlement typically takes 4-6 weeks from contract exchange to completion. However, this timeline can vary depending on the complexity of the transaction, financing arrangements, and whether there are any special conditions in the contract. Our team works efficiently to ensure the process moves as quickly as possible while maintaining thoroughness.',
                    },
                    {
                      question:
                        'What costs are involved in buying or selling property?',
                      answer:
                        'Beyond our fixed legal fees, property transactions involve government charges such as stamp duty (for buyers), registration fees, and potentially mortgage registration fees. There may also be costs for property searches, council rates adjustments, and water service charges. We provide a comprehensive breakdown of all potential costs during our initial consultation so you can budget accordingly.',
                    },
                    {
                      question:
                        "What's the difference between exchange and settlement?",
                      answer:
                        'Exchange is when signed contracts are swapped between buyer and seller, and the deposit is paid. This creates a legally binding agreement. Settlement is the final stage when the balance of the purchase price is paid, ownership is transferred, and keys are handed over. The period between exchange and settlement allows time for financing arrangements and final property inspections.',
                    },
                    {
                      question:
                        'What searches do you conduct during conveyancing?',
                      answer:
                        'We conduct a comprehensive range of searches tailored to your specific property, which may include title searches, planning certificates, land tax certificates, strata reports (for apartments), building and pest inspection reviews, and checks for government proposals that might affect the property. These searches help identify any issues that could affect your ownership or use of the property.',
                    },
                    {
                      question: 'Can you help with off-the-plan purchases?',
                      answer:
                        "Yes, we specialize in off-the-plan purchases, which involve unique considerations. We'll review the contract thoroughly, paying special attention to sunset clauses, completion timelines, specifications, and potential variations. We'll explain your rights and obligations, and help protect you from potential risks specific to off-the-plan purchases.",
                    },
                  ]}
                />
              </div>

              <div className="text-center mt-10">
                <Link href="#contact-info">
                  <Button className="bg-[#0056a8] hover:bg-[#003b73] btn-hover-effect">
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Have More Questions? Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <ChatButton />
    </div>
  );
}
