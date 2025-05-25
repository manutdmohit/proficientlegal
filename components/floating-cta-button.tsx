'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingCTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 md:right-10 z-50"
    >
      <div className="relative">
        <Link href="/book-consultation">
          <Button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-14 px-6 rounded-full shadow-lg bg-gradient-to-r from-[#0056a8] to-[#003b73] hover:from-[#003b73] hover:to-[#002b53] text-white font-medium"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Consultation
          </Button>
        </Link>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-2 bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium text-gray-800 whitespace-nowrap"
            >
              Schedule a consultation with our legal team
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
