'use client';

import { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/constants';

export function FloatingContactPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-6 z-50 w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="bg-[#003b73] text-white p-3 flex justify-between items-center">
              <h3 className="text-sm font-medium">Contact Information</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Close contact panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 bg-white text-gray-800 flex flex-col space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center text-sm hover:text-[#0056a8] transition-colors"
              >
                <PhoneCall
                  className="h-4 w-4 mr-2 text-[#0056a8]"
                  aria-hidden="true"
                />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center text-sm hover:text-[#0056a8] transition-colors"
              >
                <Mail
                  className="h-4 w-4 mr-2 text-[#0056a8]"
                  aria-hidden="true"
                />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center text-sm">
                <MapPin
                  className="h-4 w-4 mr-2 text-[#0056a8]"
                  aria-hidden="true"
                />
                <span>Sydney, Melbourne</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock
                  className="h-4 w-4 mr-2 text-[#0056a8]"
                  aria-hidden="true"
                />
                <span>{CONTACT_INFO.businessHours}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
              isOpen
                ? 'bg-gray-700 hover:bg-gray-800'
                : 'bg-gradient-to-r from-[#0056a8] to-[#003b73] hover:from-[#003b73] hover:to-[#002b53]'
            }`}
            aria-label={
              isOpen ? 'Close contact information' : 'Open contact information'
            }
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ scale: 0.5, opacity: 0, rotate: isOpen ? 0 : 180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Info className="h-5 w-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && !isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-0 mb-2 bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium text-gray-800 whitespace-nowrap"
              >
                Contact Information
                <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
