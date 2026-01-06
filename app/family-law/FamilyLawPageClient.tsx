'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  FileText,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  ScaleIcon as Scales,
  Hourglass,
  Laptop,
  Clock8,
  CalendarCheck,
  HeartHandshake,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';

export default function FamilyLawPageClient() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const id = target.getAttribute('href');
      if (id) {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener('click', handleClick)
      );
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="pt-[88px]">
        {/* ================= HERO ================= */}
        <section className="relative isolate overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60"
          />

          <div className="relative min-h-[520px] md:min-h-[650px] lg:min-h-[700px]">
            <Image
              src="/family-law-hero.png"
              alt="Family law consultation in Sydney & Melbourne"
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 z-20">
            <div className="container flex h-full items-center">
              <div className="max-w-3xl text-white drop-shadow-lg">
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Family Law Services in Sydney & Melbourne
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-white/90">
                  Proficient Legal specializes in family law, including divorce,
                  child custody, and property settlements. Our experienced
                  lawyers provide compassionate guidance.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/book-consultation">
                    <Button className="bg-white px-8 py-3 text-lg font-medium text-[#0056a8] hover:bg-gray-100">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link href="#documentation">
                    <Button
                      variant="outline"
                      className="bg-white px-8 py-3 text-lg font-medium text-[#0056a8] hover:bg-gray-100"
                    >
                      Our Approach
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="bg-white py-16">
          <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimationWrapper animation="slideLeft">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/family-consultation.png"
                  alt="Family law consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideRight">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#003b73]">
                  Compassionate Family Law Solutions
                </h2>
                <p className="mb-4 text-gray-600">
                  We understand family law matters are emotionally challenging.
                  Our team provides clear, compassionate, and practical advice.
                </p>
                <p className="mb-6 text-gray-600">
                  With fixed pricing and an efficient process, we help you move
                  forward with confidence.
                </p>
                <div className="flex items-center text-[#0056a8]">
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="font-medium">1300 011 581</span>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="bg-white py-16">
          <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimationWrapper animation="slideLeft">
              <div>
                <Image
                  src="/just-fund.png"
                  alt="Family law consultation"
                  quality={100}
                  sizes="100vw"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideRight">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#003b73]">
                  A Smarter, Flexible Way to Fund Your Family Law Matter
                </h2>
                <p className="mb-4 text-gray-600">
                  We understand that when you’re navigating a separation or
                  relationship property matter, the financial strain can
                  sometimes stand in the way of getting the legal support you
                  need.That’s why we’ve partnered with JustFund - Australia’s
                  only dedicated provider of flexible funding solutions for
                  family law legal fees.
                </p>
                <p className="mb-6 text-gray-600">
                  Through this partnership, eligible clients can access a
                  flexible line of credit to cover legal fees and expenses
                  related to separation or relationship property proceedings.
                  You don't have to repay the loan until you reach a settlement,
                  which we hope reduces the stress associated with paying costs
                  upfront. Contact us for more information, or visit{' '}
                  <Link
                    href="https://www.justfund.com.au/"
                    className="text-[#0056a8] font-medium"
                  >
                    justfund.com.au
                  </Link>
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="bg-gray-50 py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#003b73]">
                Our Family Law Services
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Comprehensive legal support tailored to your family's needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: HeartHandshake,
                  title: 'Comprehensive Legal Support',
                },
                {
                  icon: Scales,
                  title: 'Fixed Pricing',
                },
                {
                  icon: Hourglass,
                  title: 'Efficient Process',
                },
              ].map(({ icon: Icon, title }) => (
                <Card
                  key={title}
                  className="flex h-full flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="h-2 w-full bg-[#0056a8]" />
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#0056a8]/10">
                      <Icon className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-gray-600">
                    Professional, structured, and client-focused service.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DOCUMENTATION ================= */}
        <section id="documentation" className="bg-white py-16">
          <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#003b73]">
                Documentation & Finalization
              </h2>
              <p className="mb-6 text-gray-600">
                We manage all documentation accurately and efficiently, ensuring
                peace of mind.
              </p>

              <div className="rounded-lg border bg-gray-50 p-6">
                <h3 className="mb-3 flex items-center text-xl font-semibold text-[#003b73]">
                  <FileText className="mr-2 h-5 w-5 text-[#0056a8]" />
                  Our Process
                </h3>
                <ul className="space-y-3">
                  {[
                    'Initial consultation',
                    'Document preparation',
                    'Review & finalization',
                    'Court lodgment',
                    'Confirmation',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0056a8] text-sm text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/legal-documentation-process.png"
                alt="Legal documentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="bg-gray-50 py-16">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#003b73]">
              Frequently Asked Questions
            </h2>
            <FaqAccordion
              items={[
                {
                  question: 'How long does a divorce take?',
                  answer: 'Typically 3–4 months after filing, once eligible.',
                },
                {
                  question: 'Do you offer fixed pricing?',
                  answer: 'Yes, we provide transparent fixed-price services.',
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
