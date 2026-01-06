'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, FileText, Scale, CheckCircle } from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';

export default function CommercialLawClientPage() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          'href'
        );
        if (href) {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Navbar offset */}
      <main className="mt-[88px]">
        {/* ================= HERO ================= */}
        <section className="relative min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60 z-10"
          />

          {/* Background image */}
          <Image
            src="/commercial-law-hero.png"
            alt="Commercial law services in ACT, NSW, QLD & VIC"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Content */}
          <div className="relative z-20 container flex h-full items-center py-32 lg:py-40">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Commercial Law Services in Sydney & Melbourne
              </h1>

              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Proficient Legal provides expert commercial law services across
                Sydney and Melbourne. Our experienced lawyers help businesses
                navigate complex legal matters and achieve their goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation">
                  <Button className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3">
                    Book Consultation
                  </Button>
                </Link>

                <Link href="#services">
                  <Button
                    variant="outline"
                    className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="relative z-30 py-20 bg-gray-50 scroll-mt-[100px]"
        >
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4">
                  Our Commercial Law Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive legal solutions for businesses across ACT, NSW,
                  Queensland and Victoria.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Formation */}
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full" />
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Building2 className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle>Business Formation</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Expert guidance in setting up and structuring your
                      business.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Company registration
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Partnership agreements
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Trust structures
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Commercial Contracts */}
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full" />
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle>Commercial Contracts</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Drafting, reviewing, and negotiating contracts.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Supply agreements
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Service contracts
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Distribution agreements
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>

              {/* Business Disputes */}
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full" />
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle>Business Disputes</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Strategic resolution of commercial disputes.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Contract disputes
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Partnership conflicts
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0056a8]" />
                        Commercial litigation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container max-w-4xl">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">
                  Answers to common commercial law questions.
                </p>
              </div>
            </AnimationWrapper>

            <FaqAccordion
              items={[
                {
                  question: 'What legal structure is best for my business?',
                  answer:
                    'The best structure depends on liability, tax, and growth plans. We help you choose wisely.',
                },
                {
                  question: 'How can I protect my business from legal risks?',
                  answer:
                    'Through solid contracts, compliance frameworks, and proactive advice.',
                },
                {
                  question: 'What should I look for in a commercial lease?',
                  answer:
                    'Key issues include rent, term, exit clauses, and maintenance responsibilities.',
                },
              ]}
            />
          </div>
        </section>

        <CTASection />
        <ContactSection />
      </main>

      <FloatingCTAButton />
    </div>
  );
}
