'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Scale,
  Contact,
  MessageSquare,
  Users,
  Briefcase,
  Globe,
  MapPin,
  Phone,
  Mail,
  Building,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const router = useRouter();

  const toggleSubmenu = useCallback(
    (menu: string) => {
      setOpenSubmenu(openSubmenu === menu ? null : menu);
    },
    [openSubmenu]
  );

  const handleNavigation = useCallback(
    (path: string) => {
      setIsOpen(false);
      router.push(path);
    },
    [router]
  );

  const handleContactClick = useCallback((type: 'phone' | 'email') => {
    setIsOpen(false);
    if (type === 'phone') {
      window.location.href = 'tel:1300011581';
    } else {
      window.location.href = 'mailto:info@proficientlegal.com.au';
    }
  }, []);

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0056a8] z-50 overflow-y-auto"
          >
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                className="text-white p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="px-4 py-2">
              <ul className="space-y-2">
                {/* Home */}
                <li>
                  <button
                    onClick={() => handleNavigation('/')}
                    className="flex items-center w-full text-white py-3 px-4 rounded-md hover:bg-white/10"
                  >
                    <Home className="h-5 w-5 mr-3" />
                    <span>Home</span>
                  </button>
                </li>

                {/* About Us */}
                <li>
                  <button
                    onClick={() => toggleSubmenu('about')}
                    className="flex items-center justify-between w-full text-white py-3 px-4 rounded-md hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <Info className="h-5 w-5 mr-3" />
                      <span>About Us</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSubmenu === 'about' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openSubmenu === 'about' && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-8 space-y-1 mt-1"
                      >
                        <li>
                          <button
                            onClick={() => handleNavigation('/about-us')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Building className="h-4 w-4 mr-3" />
                            <span>
                              <span className="sm:hidden">About</span>
                              <span className="hidden sm:inline">
                                About Proficient Legal
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigation('/teams')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Users className="h-4 w-4 mr-3" />
                            <span>Our Team</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigation('/locations')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <MapPin className="h-4 w-4 mr-3" />
                            <span>Our Locations</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigation('/testimonials')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Star className="h-4 w-4 mr-3" />
                            <span>Testimonials</span>
                          </button>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Our Services */}
                <li>
                  <button
                    onClick={() => toggleSubmenu('services')}
                    className="flex items-center justify-between w-full text-white py-3 px-4 rounded-md hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <Scale className="h-5 w-5 mr-3" />
                      <span>Our Services</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSubmenu === 'services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openSubmenu === 'services' && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-8 space-y-1 mt-1"
                      >
                        <li>
                          <button
                            onClick={() => handleNavigation('/family-law')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Users className="h-4 w-4 mr-3" />
                            <span>Family Law</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigation('/property-law')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Briefcase className="h-4 w-4 mr-3" />
                            <span>Property Law</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigation('/immigration-law')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Globe className="h-4 w-4 mr-3" />
                            <span>Immigration Law</span>
                          </button>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Contact */}
                <li>
                  <button
                    onClick={() => toggleSubmenu('contact')}
                    className="flex items-center justify-between w-full text-white py-3 px-4 rounded-md hover:bg-white/10"
                  >
                    <div className="flex items-center">
                      <Contact className="h-5 w-5 mr-3" />
                      <span>Contact</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSubmenu === 'contact' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openSubmenu === 'contact' && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-8 space-y-1 mt-1"
                      >
                        <li>
                          <button
                            onClick={() => handleContactClick('phone')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Phone className="h-4 w-4 mr-3" />
                            <span>Call Us</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleContactClick('email')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <Mail className="h-4 w-4 mr-3" />
                            <span>Email Us</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleNavigation('/locations')}
                            className="flex items-center w-full text-white/90 py-2 px-4 rounded-md hover:bg-white/10"
                          >
                            <MapPin className="h-4 w-4 mr-3" />
                            <span>Visit Us</span>
                          </button>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Free Enquiry */}
                <li>
                  <button
                    onClick={() => handleNavigation('/free-enquiry')}
                    className="flex items-center w-full text-white py-3 px-4 rounded-md hover:bg-white/10"
                  >
                    <MessageSquare className="h-5 w-5 mr-3" />
                    <span>Free Enquiry</span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* Contact info in mobile menu */}
            <div className="mt-8 px-6 py-4 border-t border-white/20">
              <h3 className="text-white font-medium mb-3">Contact Us</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1300 011 581</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@proficientlegal.com.au</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
