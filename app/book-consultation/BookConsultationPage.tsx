'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Zap,
  Moon,
  Target,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import Link from 'next/link';

const CONSULTATION_OPTIONS = [
  {
    type: 'comprehensive',
    name: 'Comprehensive Consultation',
    duration: '1 hr',
    price: 550,
    description:
      'A full hour with a senior lawyer to discuss your matter  and provide tailored legal advice.',
    features: [
      'Detailed case analysis',
      'Document review',
      'Tailored legal strategy',
      'Follow-up recommendations',
    ],
    icon: Briefcase,
    color: 'from-blue-600 to-blue-700',
    url: '/book-consultation/comprehensive',
  },
  {
    type: 'targeted',
    name: 'Targeted Consultation',
    duration: '30 mins',
    price: 330,
    description:
      'A focused 30-minute session for specific questions or a second opinion on your legal issue.',
    features: [
      'Specific legal questions',
      'Second opinion',
      'Quick guidance',
      'Action plan',
    ],
    icon: Target,
    color: 'from-green-600 to-green-700',
    url: '/book-consultation/targeted',
  },
  {
    type: 'fast',
    name: 'Fast Consultation',
    duration: '10 mins',
    price: 110,
    description:
      'A quick consultation for urgent legal questions that need immediate guidance and direction.',
    features: [
      'Urgent legal advice',
      'Immediate guidance',
      'Quick direction',
      'Emergency support',
    ],
    icon: Zap,
    color: 'from-orange-600 to-orange-700',
    url: '/book-consultation/fast',
  },
  {
    type: 'after-hours',
    name: 'After Hours Consultation',
    duration: '1 hr',
    price: 550,
    description:
      'For urgent consultations outside of regular business hours with flexible evening and weekend availability.',
    features: [
      'Evening appointments',
      'Weekend availability',
      'Urgent legal matters',
      'Flexible scheduling',
    ],
    icon: Moon,
    color: 'from-purple-600 to-purple-700',
    url: '/book-consultation/after-hours',
  },
];

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white pt-[88px]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16 mb-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-blue-200" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
              Book Your Legal Consultation
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Choose the consultation type that best fits your legal needs. From
              quick questions to comprehensive case reviews, we have you
              covered.
            </p>
          </div>
        </div>

        {/* Consultation Options */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CONSULTATION_OPTIONS.map((option) => {
              const IconComponent = option.icon;
              return (
                <Link
                  key={option.type}
                  href={option.url}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden h-full flex flex-col">
                    {/* Header */}
                    <div
                      className={`bg-gradient-to-r ${option.color} p-4 md:p-6 text-white flex-shrink-0`}
                    >
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                        <div className="text-right space-y-2">
                          <Badge
                            variant="secondary"
                            className="text-lg font-bold bg-white/20 text-white border-white/30"
                          >
                            AUD ${option.price}
                          </Badge>
                          <div className="block">
                            <Badge
                              variant="outline"
                              className="text-xs md:text-sm bg-white/10 text-white border-white/30"
                            >
                              {option.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {option.name}
                      </h3>
                      <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                        {option.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="p-4 md:p-6 flex-grow flex flex-col">
                      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow min-h-[8rem] md:min-h-[10rem]">
                        {option.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 md:gap-3 min-h-[1.5rem] md:min-h-[1.75rem]"
                          >
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-xs md:text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90 text-white py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base flex-shrink-0`}
                      >
                        Book Now
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Information */}
          <div className="mt-8 md:mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6 text-center">
              Consultation Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  Availability
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>
                    • Regular consultations: Monday - Friday, 9:00 AM - 5:00 PM
                  </li>
                  <li>• After-hours consultations: M-F 5:30 PM - 9:00 PM</li>
                  <li>
                    • Weekend consultations: Saturday & Sunday, 9:00 AM - 12:00
                    PM
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• Professional legal advice from experienced lawyers</li>
                  <li>• Secure video consultation platform</li>
                  <li>• Detailed consultation notes and recommendations</li>
                  <li>• Follow-up support and guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
