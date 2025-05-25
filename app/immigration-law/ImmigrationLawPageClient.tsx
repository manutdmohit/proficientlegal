'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Shield,
  Briefcase,
  Building2,
  GraduationCap,
  Users,
  Plane,
  FileText,
  Scale,
  Building,
  User,
  Flag,
  Gavel,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  StampIcon as Passport,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import ChatButton from '@/components/chat/chat-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';

/**
 * Immigration Law page component
 *
 * This page provides detailed information about Proficient Legal's immigration law services,
 * including visa services and immigration assistance.
 */
export default function ImmigrationLawPageClient() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const href = this.getAttribute('href');
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
              src="/immigration-hero.png"
              alt="Immigration Law Services"
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
                Immigration Law Services
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                Expert guidance through Australia's complex immigration system.
                We help individuals and families navigate visa applications and
                immigration processes with confidence.
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
                  <Link href="#visa-services">
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
                    src="/immigration-consultation.png"
                    alt="Immigration Law Consultation"
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
                    Navigating Australia's Immigration System
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Proficient Legal specializes in efficiently resolving
                    complex immigration matters in Australia. Our experienced
                    team provides expert guidance through every step of the
                    immigration process, from visa applications to appeals and
                    citizenship.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We understand that immigration matters are often
                    life-changing decisions. That's why we take a personalized
                    approach to each case, ensuring that your unique
                    circumstances and goals are carefully considered in
                    developing the most effective strategy.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Whether you're seeking to join family, pursue work
                    opportunities, or establish a new life in Australia, our
                    team has the expertise to help you navigate the complexities
                    of immigration law with confidence.
                  </p>
                  <div className="flex items-center text-[#0056a8]">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">1300 011 581</span>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Visa Services Section */}
        <section id="visa-services" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Visa Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive visa application assistance tailored to your
                  specific needs.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Visa Service 1 */}
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Partner Visas</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Expert assistance with intricate partner visa
                      applications, helping couples navigate the complex
                      requirements for spouse and de facto partner visas.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Spouse visa applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>De facto partner applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Relationship evidence guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 2 */}
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Shield className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Protection Visas</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Support for Onshore Protection Visa Subclass 866,
                      particularly for international students and tourists
                      fearing return to their home country.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Refugee status claims</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Humanitarian visa applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Protection claim documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 3 */}
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Briefcase className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Work Visas</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Guidance on temporary and permanent work visas, helping
                      skilled professionals and employers navigate Australia's
                      work visa programs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Temporary Skill Shortage visas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Employer-sponsored visas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Working holiday visas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 4 */}
              <AnimationWrapper animation="slideUp" delay={0.4}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Building2 className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Business Visas</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Assistance with business innovation, investment, and
                      employer-sponsored visas for entrepreneurs and business
                      owners.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Business Innovation visas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Investor visas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Business talent visas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 5 */}
              <AnimationWrapper animation="slideUp" delay={0.5}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <GraduationCap className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Skilled Migration</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Support for skilled migration visa applications, helping
                      qualified professionals secure permanent residency in
                      Australia.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Skilled Independent visas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>State-sponsored visas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Skills assessment guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 6 */}
              <AnimationWrapper animation="slideUp" delay={0.6}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Plane className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Visitor, Student & Retirement Visas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Help with various temporary visa applications for
                      visitors, students, and retirees looking to spend time in
                      Australia.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Tourist visa applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Student visa guidance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Retirement visa options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 7 */}
              <AnimationWrapper animation="slideUp" delay={0.7}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Family Migration Visas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Including partner, children, and parent visas to help
                      families reunite and settle in Australia.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Child visa applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Parent visa options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Family sponsorship guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Visa Service 8 */}
              <AnimationWrapper animation="slideUp" delay={0.8}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Passport className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Resident Return Visas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Assistance for returning residents who need to renew their
                      travel facilities after spending time outside Australia.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Travel facility renewal</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Substantial ties assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Expedited processing options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Immigration Services Section */}
        <section id="immigration-services" className="py-16 bg-white">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Immigration Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive immigration assistance beyond visa applications.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Immigration Service 1 */}
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Initial Review and Advice
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Comprehensive assessment of individual circumstances to
                      determine the most suitable visa options and immigration
                      pathways.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Eligibility assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Visa options explanation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Documentation requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Immigration Service 2 */}
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Counsel on Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Tailored migration strategies to suit specific needs,
                      taking into account your unique circumstances and
                      long-term goals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personalized pathway planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Alternative options assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Long-term immigration planning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Immigration Service 3 */}
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Building className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Corporate Migration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Services for businesses seeking to sponsor employees,
                      including guidance on employer obligations and compliance
                      requirements.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Business sponsorship applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Compliance advice</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Employee nomination assistance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Immigration Service 4 */}
              <AnimationWrapper animation="slideUp" delay={0.4}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <User className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Individual Migration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Personalized assistance for individual applicants,
                      providing support throughout the entire migration process.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Application preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Document verification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Ongoing application support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Immigration Service 5 */}
              <AnimationWrapper animation="slideUp" delay={0.5}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Flag className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Australian Citizenship Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Guidance through the citizenship process, helping
                      permanent residents become Australian citizens.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Eligibility assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Application preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Citizenship test preparation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Immigration Service 6 */}
              <AnimationWrapper animation="slideUp" delay={0.6}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Gavel className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Appeals & Ministerial Intervention
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Representation in the Administrative Appeals Tribunal
                      (AAT) and assistance with requests for ministerial
                      intervention in exceptional cases.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>AAT appeal preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Ministerial intervention requests</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Judicial review options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Immigration Process Section */}
        <section id="immigration-process" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Our Immigration Process
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We guide you through every step of your immigration journey
                  with expertise and clarity.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimationWrapper animation="slideLeft">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/immigration-process-steps.png"
                    alt="Immigration Process Steps"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideRight">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Initial Consultation
                        </h3>
                        <p className="text-gray-600">
                          We assess your circumstances, discuss your goals, and
                          identify potential visa options and immigration
                          pathways.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Strategy Development
                        </h3>
                        <p className="text-gray-600">
                          We create a tailored immigration strategy based on
                          your specific circumstances, goals, and eligibility
                          factors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Documentation Preparation
                        </h3>
                        <p className="text-gray-600">
                          We guide you through gathering and preparing all
                          necessary documentation, ensuring everything meets the
                          Department's requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Application Lodgment
                        </h3>
                        <p className="text-gray-600">
                          We prepare and submit your application, ensuring all
                          forms are correctly completed and all supporting
                          documents are included.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">5</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Application Management
                        </h3>
                        <p className="text-gray-600">
                          We manage all communication with the Department,
                          respond to requests for additional information, and
                          keep you updated throughout the process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="bg-[#0056a8] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                        <span className="text-sm">6</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003b73] mb-2">
                          Visa Grant & Follow-up
                        </h3>
                        <p className="text-gray-600">
                          We assist with any post-grant requirements and provide
                          guidance on your rights and obligations as a visa
                          holder or new resident.
                        </p>
                      </div>
                    </div>
                  </div>
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
                    Ready to Discuss Your Immigration Matter?
                  </h2>
                  <p className="mb-6 text-white/90">
                    Our team of experienced immigration lawyers are here to
                    help. Contact us today for a confidential consultation and
                    take the first step toward your Australian immigration
                    journey.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <p className="text-white/90">1300 011 581</p>
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
                    <Link href="tel:1300011581">
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
                    src="/immigration-consultation-office.png"
                    alt="Immigration Lawyer Consultation"
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
                  Find answers to common questions about immigration law and our
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
                        'How long does the visa application process take?',
                      answer:
                        'Processing times vary significantly depending on the visa type, your individual circumstances, and current Department of Home Affairs workloads. Partner visas may take 12-24 months, skilled visas 6-12 months, and visitor visas 2-4 weeks. During your initial consultation, we can provide more specific timeframe estimates based on your situation and the latest processing trends.',
                    },
                    {
                      question:
                        'What documents will I need for my visa application?',
                      answer:
                        'Required documentation varies by visa type but typically includes identity documents (passport, birth certificate), relationship evidence (for partner visas), qualification certificates, employment references (for skilled visas), health examinations, and character clearances. We provide a comprehensive checklist tailored to your specific visa application and guide you through gathering all necessary documentation.',
                    },
                    {
                      question:
                        'Can I apply for a visa if I have been refused before?',
                      answer:
                        'Yes, in many cases you can apply again after a refusal. However, some refusals may result in temporary exclusion periods or require addressing specific concerns from the previous application. We specialize in helping clients overcome previous refusals by identifying the issues that led to the refusal and developing strategies to address them in a new application.',
                    },
                    {
                      question:
                        'What happens if my visa application is refused?',
                      answer:
                        'If your application is refused, you may have review rights at the Administrative Appeals Tribunal (AAT). Time limits for lodging appeals are strict, usually 21-28 days from the refusal decision. In some cases, you might also consider ministerial intervention or lodging a new application. We can advise on the best course of action based on your specific circumstances and the reasons for refusal.',
                    },
                    {
                      question:
                        'How can I check the status of my visa application?',
                      answer:
                        'You can check your application status through your ImmiAccount online. As your legal representatives, we can also make inquiries with the Department of Home Affairs on your behalf. We provide regular updates to our clients throughout the application process and promptly notify you of any developments or requests for additional information.',
                    },
                  ]}
                />
              </div>

              <div className="text-center mt-10">
                <Link href="#contact-info">
                  <Button className="bg-[#0056a8] hover:bg-[#003b73] btn-hover-effect">
                    <MessageSquare className="h-5 w-5 mr-2" />
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
