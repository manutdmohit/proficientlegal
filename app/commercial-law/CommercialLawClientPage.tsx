'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Building2,
  FileText,
  Briefcase,
  Scale,
  Users,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';
import { CONTACT_INFO } from '@/lib/constants';

export default function CommercialLawClientPage() {
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
    <div className="flex min-h-screen flex-col pt-[88px]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60 z-10"
          ></motion.div>

          <div className="relative h-[700px]">
            <Image
              src="/commercial-law-hero.png"
              alt="Commercial law services in ACT, NSW, QLD & VIC"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="container absolute inset-0 flex items-center z-20">
            <div className="max-w-3xl text-white drop-shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-shadow-lg">
                Commercial Law Services in Sydney & Melbourne
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                Proficient Legal provides expert commercial law services across
                Sydney and Melbourne. Our experienced commercial lawyers help
                businesses navigate complex legal matters and achieve their
                goals.
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

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Our Commercial Law Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive legal solutions for businesses across ACT, NSW,
                  Queensland and Victoria.
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
                      <Building2 className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Business Formation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Expert guidance in setting up and structuring your
                      business for success.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Company registration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Partnership agreements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Trust structures</span>
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
                      <FileText className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Commercial Contracts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Comprehensive contract drafting, review, and negotiation
                      services.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Supply agreements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Service contracts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Distribution agreements</span>
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
                      <Scale className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Business Disputes</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Strategic resolution of commercial disputes and
                      litigation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Contract disputes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Partnership conflicts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Commercial litigation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Find answers to common questions about commercial law and our
                  services.
                </p>
              </div>
            </AnimationWrapper>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <FaqAccordion
                  items={[
                    {
                      question: 'What legal structure is best for my business?',
                      answer:
                        'The best legal structure depends on various factors including your business size, number of owners, liability concerns, and tax considerations. We can help you evaluate the options (sole trader, partnership, company, or trust) and choose the most suitable structure for your specific needs.',
                    },
                    {
                      question:
                        'How can I protect my business from legal risks?',
                      answer:
                        'We help businesses implement risk management strategies through proper contracts, compliance programs, and insurance arrangements. Our proactive approach helps identify potential issues before they become problems, saving you time and money in the long run.',
                    },
                    {
                      question: 'What should I look for in a commercial lease?',
                      answer:
                        'Key considerations in a commercial lease include rent and outgoings, lease term and options, permitted use, maintenance responsibilities, and exit provisions. We can review your lease and negotiate terms to protect your interests and ensure the agreement meets your business needs.',
                    },
                  ]}
                />
              </div>
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
