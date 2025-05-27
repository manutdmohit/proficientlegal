'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import HeroTextAnimation from '@/components/hero-text-animation';
import Link from 'next/link';
import { MessageSquare, Briefcase } from 'lucide-react';

/**
 * Hero section component displayed at the top of the homepage.
 * Features a full-width background image with animated text overlay.
 *
 * Uses framer-motion for entrance animations and custom text animation
 * for the main heading to create a professional, engaging first impression.
 */
export function HeroSection() {
  return (
    <section className="relative">
      {/* Semi-transparent gradient overlay to improve text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-[#003b73]/60 to-transparent z-10"
      ></motion.div>

      {/* Background image container with fixed height */}
      <div className="relative h-[700px]">
        <Image
          src="/sydney-opera-house-hq.png"
          alt="Best Lawyers in Sydney - Proficient Legal's headquarters in Sydney CBD, offering expert legal services in family law, property law, and immigration law"
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
          {/* Animated heading with word-by-word reveal effect */}
          <HeroTextAnimation
            text="Best Lawyers in Australia | Expert Legal Services Sydney & Melbourne"
            className="text-2xl mt-5 md:text-5xl font-bold mb-6 text-shadow-lg hero-heading leading-tight tracking-tight text-white"
          />

          {/* Subtitle with delayed entrance animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl mb-8 text-shadow subtitle text-white/90 leading-relaxed tracking-wide"
          >
            Australia's leading law firm offering expert legal services in
            family law, property law, and immigration law. Find the best lawyers
            in Sydney, Melbourne, and across Australia.
          </motion.p>

          {/* Call-to-action buttons with staggered animations */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Link
                href="/book-consultation"
                aria-label="Book a free consultation with our expert lawyers in Sydney and Melbourne"
              >
                <Button className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-6 btn-hover-effect">
                  <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Link
                href="/#services"
                aria-label="Explore our comprehensive legal services in Sydney and Melbourne"
              >
                <Button
                  variant="outline"
                  className="bg-white text-[#0056a8] hover:bg-gray-100 text-lg px-8 py-6 btn-hover-effect"
                >
                  <Briefcase className="h-5 w-5 mr-2" aria-hidden="true" />
                  Our Legal Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
