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
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';
import { CONTACT_INFO } from '@/lib/constants';

export default function PropertyLawClientPage() {
  // Smooth scrolling (safe + cleaned up)
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handler = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const id = target.getAttribute('href');
      if (id) {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    anchors.forEach((a) => a.addEventListener('click', handler));
    return () =>
      anchors.forEach((a) => a.removeEventListener('click', handler));
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
              src="/modern-real-estate-city.png"
              alt="Property law and real estate services"
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
                  Property Law & Real Estate Services in ACT, NSW, QLD & VIC
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-white/90">
                  Proficient Legal provides expert legal guidance for property
                  transactions and real estate matters, ensuring your interests
                  are protected from contract to settlement.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/book-consultation">
                    <Button className="bg-white px-8 py-3 text-lg font-medium text-[#0056a8] hover:bg-gray-100">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button
                      variant="outline"
                      className="bg-white px-8 py-3 text-lg font-medium text-[#0056a8] hover:bg-gray-100"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="bg-white py-16">
          <div className="container grid gap-12 lg:grid-cols-2 items-center">
            <AnimationWrapper animation="slideLeft">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/real-estate-discussion.png"
                  alt="Property consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideRight">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#003b73]">
                  Comprehensive Property Law Solutions
                </h2>
                <p className="mb-4 text-gray-600">
                  Our experienced property lawyers guide you through every step
                  of your transaction with clarity, precision, and confidence.
                </p>
                <p className="mb-6 text-gray-600">
                  With transparent fixed fees and proactive communication, we
                  ensure a smooth process from contract to settlement.
                </p>
                <div className="flex items-center text-[#0056a8]">
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="font-medium">{CONTACT_INFO.phone}</span>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="bg-gray-50 py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#003b73]">
                Our Property Law Services
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Comprehensive legal support tailored to residential, commercial,
                and development property matters.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Home, title: 'Residential Conveyancing' },
                { icon: Building2, title: 'Commercial Conveyancing' },
                { icon: FileContract, title: 'Off-the-Plan Contracts' },
                { icon: Package, title: 'House & Land Packages' },
                { icon: FileEdit, title: 'Crown Lease Variations' },
                { icon: ClipboardList, title: 'Development Applications' },
              ].map(({ icon: Icon, title }) => (
                <Card
                  key={title}
                  className="flex h-full flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="h-2 bg-[#0056a8]" />
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#0056a8]/10">
                      <Icon className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-gray-600">
                    Professional, accurate, and client-focused legal support.
                  </CardContent>
                </Card>
              ))}
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
                  question: 'How long does a property settlement take?',
                  answer:
                    'Typically 4–6 weeks, depending on contract terms and complexity.',
                },
                {
                  question: 'Do you offer fixed fees?',
                  answer:
                    'Yes. All our property services are provided on a transparent fixed-fee basis.',
                },
              ]}
            />
            <div className="mt-10 text-center">
              <Link href="#contact-info">
                <Button className="bg-[#0056a8] hover:bg-[#003b73]">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Have More Questions?
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <ContactSection />
      </main>

      <FloatingCTAButton />
    </div>
  );
}
