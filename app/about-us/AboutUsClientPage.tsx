'use client';

import { useEffect } from 'react';
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
import ChatButton from '@/components/chat/chat-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';

/**
 * About Us page component
 *
 * This page provides detailed information about Proficient Legal,
 * including their values, approach, and team.
 */
export default function AboutUsClientPage() {
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
          <div className="relative h-[500px]">
            <Image
              src="/sydney-opera-house-hq.png"
              alt="Sydney Opera House"
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
                About Proficient Legal
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                A distinguished law firm providing comprehensive legal services
                in property, family, and immigration law.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="#contact">
                    <Button className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3 font-medium">
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
                    src="/legal-team-office.png"
                    alt="Proficient Legal Team"
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
                    Welcome to Proficient Legal
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Welcome to Proficient Legal, a distinguished law firm
                    nestled in the vibrant city of Sydney, Australia. Situated
                    in the heart of this bustling metropolis, we stand as a
                    pillar of legal expertise, providing individuals,
                    businesses, and organizations with comprehensive legal
                    services specializing in property, family, and immigration
                    law.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-gray-100 text-[#0056a8] px-3 py-1 rounded-full text-sm font-medium">
                      #LegalExcellence
                    </span>
                    <span className="bg-gray-100 text-[#0056a8] px-3 py-1 rounded-full text-sm font-medium">
                      #SydneyLawyers
                    </span>
                    <span className="bg-gray-100 text-[#0056a8] px-3 py-1 rounded-full text-sm font-medium">
                      #PropertyLaw
                    </span>
                    <span className="bg-gray-100 text-[#0056a8] px-3 py-1 rounded-full text-sm font-medium">
                      #FamilyLaw
                    </span>
                    <span className="bg-gray-100 text-[#0056a8] px-3 py-1 rounded-full text-sm font-medium">
                      #ImmigrationLaw
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-[#0056a8]">
                      <Phone className="h-5 w-5 mr-2" />
                      <span className="font-medium">1300 011 581</span>
                    </div>
                    <div className="flex items-center text-[#0056a8]">
                      <Mail className="h-5 w-5 mr-2" />
                      <span className="font-medium">
                        INFO@PROFICIENTLEGAL.COM.AU
                      </span>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-gray-50">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <AnimationWrapper animation="slideUp" delay={0.1}>
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

              <AnimationWrapper animation="slideUp" delay={0.2}>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <section id="services" className="py-16 bg-white">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <ChatButton />
    </div>
  );
}
