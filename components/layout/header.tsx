'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/layout/mobile-nav';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';
import { FloatingContactPanel } from '@/components/floating-contact-panel';

/**
 * Header component containing the top information bar and main navigation.
 * Uses framer-motion for entrance animations to enhance user experience.
 *
 * The component is structured in two parts:
 * 1. Top info bar with contact details
 * 2. Main navigation bar with logo and menu
 */
export function Header({
  headerRef,
}: { headerRef?: React.RefObject<HTMLDivElement> } = {}) {
  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top info bar - Contains contact information and business hours */}
      <div className="bg-[#003b73] text-white py-2 w-full">
        <div className="container px-4 md:px-6 mmx-auto w-full">
          {/* Remove mobile view from header - it will be in the floating panel */}
          <div className="hidden">
            {/* This content is moved to the floating panel */}
          </div>

          {/* Desktop view - horizontal with left/right alignment */}
          <div className="hidden md:flex md:justify-between md:items-center">
            <div className="flex items-center space-x-4 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <PhoneCall className="h-4 w-4 mr-2" aria-hidden="true" />
                <a href="tel:1300123456">1300 011 581</a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                <a href="mailto:info@proficientlegal.com.au">
                  info@proficientlegal.com.au
                </a>
              </motion.div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                <span>Sydney, Melbourne</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center"
              >
                <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                <span>Mon-Fri: 9am-5pm</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#0056a8] py-4 w-full shadow-md"
      >
        <div className="container px-4 md:px-6 mx-auto w-full flex items-center">
          {/* Logo section - Left aligned */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Proficient Legal Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto mr-3"
                />
                <span className="text-white font-bold text-xl tracking-tight">
                  Proficient Legal
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation - Center aligned */}
          <div className="flex-1 flex justify-center">
            <MainNav />
          </div>

          {/* Mobile menu button - Right aligned, only visible on mobile */}
          <div className="flex-1 flex justify-end">
            <MobileNav />
          </div>
        </div>
      </motion.header>

      {/* Floating Contact Panel - Similar to chat button but on left side */}
      <div className="fixed left-6 bottom-6 md:left-10 z-50 md:hidden">
        <FloatingContactPanel />
      </div>
    </div>
  );
}
