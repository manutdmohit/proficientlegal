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
      <div className="relative h-[500px] md:h-[700px]">
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
      <div className="container absolute inset-0 flex items-center z-20 px-4 md:px-6">
        <div className="max-w-xl text-white drop-shadow-lg mt-[60px] md:mt-[88px]">
          {/* Animated heading with word-by-word reveal effect */}
          <HeroTextAnimation
            text="Experience, Expertise, Excellence | Family, Immigration and Commercial Lawyers"
            className="text-lg sm:text-xl md:text-5xl font-bold mb-4 md:mb-6 text-shadow-lg hero-heading leading-tight tracking-tight text-white"
          />

          {/* Subtitle with delayed entrance animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 text-shadow subtitle text-white/90 leading-relaxed tracking-wide"
          >
            Australia's leading law firm offering expert legal services in
            family law, property law, and immigration law. Find the best lawyers
            in Sydney, Melbourne, and across Australia.
          </motion.p>

          {/* Call-to-action buttons with staggered animations */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/book-consultation"
                aria-label="Book a free consultation with our expert lawyers in Sydney and Melbourne"
                className="block w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-white text-[#0056a8] hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 btn-hover-effect">
                  <MessageSquare
                    className="h-4 w-4 md:h-5 md:w-5 mr-2"
                    aria-hidden="true"
                  />
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/#services"
                aria-label="Explore our comprehensive legal services in Sydney and Melbourne"
                className="block w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white text-[#0056a8] hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 btn-hover-effect"
                >
                  <Briefcase
                    className="h-4 w-4 md:h-5 md:w-5 mr-2"
                    aria-hidden="true"
                  />
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
