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

/**
 * Family Law page component
 *
 * This page provides detailed information about Proficient Legal's family law services,
 * including their approach, documentation process, and accessibility features.
 */
export default function FamilyLawPageClient() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
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
          {/* Semi-transparent gradient overlay to improve text readability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-[#003b73]/80 to-[#0056a8]/60 z-10"
          ></motion.div>

          {/* Background image container with fixed height */}
          <div className="relative h-[700px]">
            <Image
              src="/family-law-hero.png"
              alt="Family law consultation in Sydney & Melbourne"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
          </div>

          {/* Content overlay positioned absolutely over the background image */}
          <div className="container absolute inset-0 flex items-center z-20">
            <div className="max-w-3xl text-white drop-shadow-lg]">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-shadow-lg">
                Family Law Services in Sydney & Melbourne
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed text-shadow subtitle">
                Proficient Legal specializes in family law, including divorce,
                child custody, and property settlements. Our experienced family
                lawyers in Sydney & Melbourne provide compassionate guidance for
                all family law matters.
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
                  <Link href="#documentation">
                    <Button
                      variant="outline"
                      className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-3 font-medium"
                    >
                      Our Approach
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
                    src="/family-consultation.png"
                    alt="Family law consultation with a lawyer in Australia"
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
                    Compassionate Family Law Solutions
                  </h2>
                  <p className="text-gray-600 mb-4">
                    At Proficient Legal, we understand that family law matters
                    are often emotionally challenging. Our experienced team
                    provides compassionate guidance and practical solutions to
                    help you navigate these difficult times with confidence.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We offer comprehensive legal support, including legal
                    information, mediation on parenting and financial matters,
                    and full legal documentation. Our approach is
                    client-centered, ensuring your needs and concerns are always
                    our priority.
                  </p>
                  <p className="text-gray-600 mb-6">
                    With fixed pricing and an efficient process, we help you
                    move forward with clarity and confidence, aiming to get you
                    on a new life track within 90 days.
                  </p>
                  <div className="flex items-center text-[#0056a8]">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">1300 011 581</span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/property-law"
                      className="text-[#0056a8] underline font-medium"
                    >
                      Learn more about our Property Law services
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
                  Our Family Law Services
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive legal support tailored to your family's unique
                  needs, including divorce, child custody, property settlements,
                  and more.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-[#0056a8] h-2 w-full"></div>
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-[#0056a8]/10 flex items-center justify-center mb-2">
                      <HeartHandshake className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">
                      Comprehensive Legal Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      We provide a full range of family law services, including
                      legal information, mediation on parenting and financial
                      matters, and full legal documentation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Divorce and separation advice</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Child custody and parenting arrangements</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Property settlements</span>
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
                      <Scales className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Fixed Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      We offer fixed-price services, ensuring you have clarity
                      on costs without fear of unexpected expenses. Our
                      transparent pricing model helps you plan your budget with
                      confidence.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Transparent fee structure</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>No hidden costs or surprises</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Payment plans available</span>
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
                      <Hourglass className="h-6 w-6 text-[#0056a8]" />
                    </div>
                    <CardTitle className="text-xl">Efficient Process</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">
                      Our firm emphasizes efficiency, being highly organized and
                      structured, yet flexible to work according to your
                      timetable. We respect your time and aim to resolve matters
                      promptly.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Streamlined legal processes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Regular progress updates</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                        <span>Timely resolution of matters</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Documentation Process Section */}
        <section id="documentation" className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimationWrapper animation="slideLeft">
                <div>
                  <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                    Documentation & Finalization
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Once an agreement is reached, we assist in selecting the
                    appropriate legal documents for your situation and lodge
                    them with the Court if necessary. Our team ensures all
                    paperwork is completed accurately and efficiently.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We guide you through the process to finalize your divorce,
                    enabling you to move forward with clarity and confidence.
                    Our goal is to make this process as smooth and stress-free
                    as possible.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <h3 className="text-xl font-semibold text-[#003b73] mb-3 flex items-center">
                      <FileText className="h-5 w-5 text-[#0056a8] mr-2" />
                      Our Documentation Process
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-[#0056a8] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <span className="text-sm">1</span>
                        </div>
                        <span>
                          Initial consultation to understand your needs
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#0056a8] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <span className="text-sm">2</span>
                        </div>
                        <span>
                          Preparation of all necessary legal documents
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#0056a8] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <span className="text-sm">3</span>
                        </div>
                        <span>Review and finalization of documents</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#0056a8] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <span className="text-sm">4</span>
                        </div>
                        <span>Court lodgment and follow-up if required</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#0056a8] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <span className="text-sm">5</span>
                        </div>
                        <span>Confirmation of finalization and next steps</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="/family-law/process">
                    <Button className="bg-[#0056a8] hover:bg-[#003b73] btn-hover-effect">
                      <FileText className="h-5 w-5 mr-2" />
                      Learn More About Our Process
                    </Button>
                  </Link>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideRight">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/legal-documentation-process.png"
                    alt="Legal Documentation Process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0056a8]/30 to-transparent"></div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Convenience & Accessibility Section */}
        <section id="accessibility" className="py-16 bg-gray-50">
          <div className="container">
            <AnimationWrapper animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Convenience & Accessibility
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We make accessing legal services simple and convenient, with
                  flexible options designed to fit your schedule and
                  preferences.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <AnimationWrapper animation="slideUp" delay={0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Laptop className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Online Services
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Utilizing the internet and videoconferencing, we deliver and
                    exchange information, allowing you to progress with your
                    divorce settlement from the comfort of your home or office.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Virtual consultations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Secure document sharing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Electronic signatures</span>
                    </li>
                  </ul>
                </div>
              </AnimationWrapper>

              {/* Feature 2 */}
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <Clock8 className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Extended Availability
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    We understand that legal issues don't always happen during
                    business hours. That's why we're available from 9 AM to 5
                    PM, Monday to Friday, to assist you when you need us.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>9 AM to 5 PM availability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Monday to Friday</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                </div>
              </AnimationWrapper>

              {/* Feature 3 */}
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                  <div className="rounded-full bg-[#0056a8]/10 p-3 w-fit mb-4">
                    <CalendarCheck className="h-6 w-6 text-[#0056a8]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003b73] mb-3">
                    Quick Resolution
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    We aim to help you get on a new life track within 90 days.
                    Our efficient processes and dedicated team work diligently
                    to resolve your matter as quickly as possible without
                    compromising quality.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>90-day resolution target</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Proactive case management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Regular progress updates</span>
                    </li>
                  </ul>
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
                    Ready to Discuss Your Family Law Matter?
                  </h2>
                  <p className="mb-6 text-white/90">
                    Our team of experienced family lawyers are here to help.
                    Contact us today for a confidential consultation and take
                    the first step toward resolving your family law matter.
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
                    src="/family-consultation.png"
                    alt="Family Lawyer Consultation"
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
                  Find answers to common questions about family law and our
                  services.
                </p>
              </div>
            </AnimationWrapper>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <FaqAccordion
                  items={[
                    {
                      question: 'How long does a divorce typically take?',
                      answer:
                        'In Australia, you must be separated for at least 12 months before applying for divorce. Once the application is filed, it typically takes about 3-4 months for the divorce to be finalized. At Proficient Legal, we aim to help you complete the entire process within 90 days of your application being eligible.',
                    },
                    {
                      question:
                        'What is the difference between separation and divorce?',
                      answer:
                        'Separation occurs when you and your spouse decide to live apart and end your relationship. Divorce is the legal ending of a marriage. In Australia, you need to be separated for at least 12 months before you can apply for a divorce. We can help you navigate both processes with clarity and confidence.',
                    },
                    {
                      question:
                        'How are property and assets divided in a divorce?',
                      answer:
                        'Property division in Australia follows a four-step process: identifying and valuing all assets and liabilities, assessing contributions (financial and non-financial), considering future needs, and ensuring the outcome is just and equitable. There is no automatic 50/50 split. Our team can help you achieve a fair settlement based on your specific circumstances.',
                    },
                    {
                      question:
                        'How do you determine child custody arrangements?',
                      answer:
                        "In Australia, the primary consideration is always the best interests of the child. The court considers factors such as the benefit of children having meaningful relationships with both parents, while ensuring they are protected from harm. We help parents develop parenting plans that prioritize their children's wellbeing while respecting both parents' roles.",
                    },
                    {
                      question: 'What are your fees for family law services?',
                      answer:
                        'We offer fixed-price services for most family law matters, ensuring you have clarity on costs without fear of unexpected expenses. The exact fee depends on the complexity of your case and the services required. We provide a detailed quote during your initial consultation, with no hidden costs or surprises.',
                    },
                  ]}
                />
              </div>

              <div className="text-center mt-10">
                <Link href="#contact-info">
                  <Button className="bg-[#0056a8] hover:bg-[#003b73] btn-hover-effect">
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

      <FloatingCTAButton />
    </div>
  );
}
