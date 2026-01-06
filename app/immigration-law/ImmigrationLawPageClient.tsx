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
import FloatingCTAButton from '@/components/floating-cta-button';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';
import FaqAccordion from '@/components/faq-accordion';

const HEADER_HEIGHT = 88;

export default function ImmigrationLawPageClient() {
  /** Offset anchor scroll for fixed navbar */
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;

        const target = document.querySelector(targetId);
        if (!target) return;

        const y =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          HEADER_HEIGHT;

        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="pt-[88px]">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/immigration-hero.png"
              alt="Immigration Law Services"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60" />
          </div>

          <div
            className="container flex items-center"
            style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-white py-28"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Immigration Law Services
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Expert guidance through Australia's complex immigration system.
                We help individuals and families navigate visa applications with
                confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation">
                  <Button className="bg-white text-[#0056a8] hover:bg-gray-100 px-8 py-3 text-lg">
                    Book Consultation
                  </Button>
                </Link>
                <Link href="#visa-services">
                  <Button
                    variant="outline"
                    className="bg-white text-[#0056a8] hover:bg-gray-100 px-8 py-3 text-lg"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="py-20 bg-white">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slideLeft">
              <div className="relative h-[420px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/immigration-consultation.png"
                  alt="Immigration Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-[#003b73] mb-4">
                  Navigating Australia's Immigration System
                </h2>
                <p className="text-gray-600 mb-4">
                  Proficient Legal provides expert immigration advice and
                  representation for individuals, families, and businesses.
                </p>
                <p className="text-gray-600 mb-6">
                  We tailor every strategy to your unique circumstances and
                  long-term goals.
                </p>
                <div className="flex items-center text-[#0056a8] font-medium">
                  <Phone className="h-5 w-5 mr-2" />
                  1300 011 581
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        {/* ================= VISA SERVICES ================= */}
        <section
          id="visa-services"
          className="py-20 bg-gray-50 scroll-mt-[88px]"
        >
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#003b73] mb-4">
                Visa Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive visa assistance across all major Australian visa
                categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Partner Visas' },
                { icon: Shield, title: 'Protection Visas' },
                { icon: Briefcase, title: 'Work Visas' },
                { icon: Building2, title: 'Business Visas' },
                { icon: GraduationCap, title: 'Skilled Migration' },
                { icon: Plane, title: 'Visitor & Student Visas' },
                { icon: Users, title: 'Family Migration' },
                { icon: Passport, title: 'Resident Return Visas' },
              ].map((item, i) => (
                <AnimationWrapper key={i} animation="slideUp" delay={i * 0.05}>
                  <Card className="h-full shadow-lg hover:shadow-xl transition">
                    <div className="bg-[#0056a8] h-2 w-full" />
                    <CardHeader>
                      <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                        <item.icon className="h-6 w-6 text-[#0056a8]" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Professional assistance tailored to your visa category.
                      </p>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="py-20 bg-white scroll-mt-[88px]">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003b73] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Answers to common immigration law questions.
              </p>
            </div>

            <FaqAccordion
              items={[
                {
                  question: 'How long does a visa application take?',
                  answer:
                    'Processing times vary by visa type and circumstances. We provide realistic timelines during consultation.',
                },
                {
                  question: 'Can I reapply after refusal?',
                  answer:
                    'Yes, in many cases. Strategy and refusal reasons are critical.',
                },
                {
                  question: 'Do you handle appeals?',
                  answer:
                    'Yes. We assist with AAT appeals and ministerial intervention.',
                },
              ]}
            />

            <div className="text-center mt-10">
              <Link href="#contact-info">
                <Button className="bg-[#0056a8] hover:bg-[#003b73]">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Us
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
