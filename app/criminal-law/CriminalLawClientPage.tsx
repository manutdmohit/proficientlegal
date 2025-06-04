'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Shield, Gavel, CheckCircle, HelpCircle } from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';

export default function CriminalLawClientPage() {
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
              src="/criminal-law-hero.png"
              alt="Criminal law services in ACT, NSW, QLD & VIC"
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
                Criminal Law Services in Sydney & Melbourne
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                Proficient Legal provides expert criminal law representation
                across Sydney & Melbourne. Our experienced criminal lawyers
                ensure your rights are protected and provide strong defense
                strategies.
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
                  Our Criminal Law Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive legal representation for criminal matters across
                  ACT & NSW.
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
                      <Scale className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Criminal Defense</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Expert representation for all criminal charges, from minor
                      offenses to serious indictable matters.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Assault and violence charges</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Drug offenses</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Traffic offenses</span>
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
                      <Shield className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Bail Applications</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Strong bail applications and representation in bail
                      hearings.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Show cause applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Bail variation applications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Bail review applications</span>
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
                      <Gavel className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Court Representation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Experienced representation in all courts, from Local Court
                      to Supreme Court.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Local Court matters</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>District Court trials</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Supreme Court appeals</span>
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
                  Find answers to common questions about criminal law and our
                  services.
                </p>
              </div>
            </AnimationWrapper>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <FaqAccordion
                  items={[
                    {
                      question: 'What should I do if I am arrested?',
                      answer:
                        'If you are arrested, remain silent and request to speak with a lawyer immediately. Do not make any statements to police without legal representation. Contact us as soon as possible, and we will guide you through the process and protect your rights.',
                    },
                    {
                      question: 'How much does a criminal lawyer cost?',
                      answer:
                        'Our fees vary depending on the complexity of your case and the court level. We offer fixed-fee arrangements for many matters and can discuss payment options during your initial consultation. We believe in transparent pricing and will provide a clear fee structure upfront.',
                    },
                    {
                      question:
                        'What is the difference between summary and indictable offenses?',
                      answer:
                        'Summary offenses are less serious matters heard in the Local Court, while indictable offenses are more serious matters that may be heard in higher courts. The distinction affects the court process, potential penalties, and available defenses. Our lawyers can explain how this applies to your specific case.',
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
