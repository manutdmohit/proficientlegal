'use client';

import { Button } from '@/components/ui/button';
import {
  PhoneCall,
  Mail,
  MapPin,
  User,
  FileText,
  MessageSquare,
  Send,
  Phone,
  Users,
  Building,
  Star,
  Scale,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import { useContactForm } from '@/hooks/useContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import Link from 'next/link';

/**
 * Contact section component with detailed contact information and a message form.
 * Features a two-column layout with contact details and a contact form.
 *
 * Uses a dark background with white text for visual contrast and to draw attention.
 * Includes animations for enhanced user experience.
 */
export function ContactSection() {
  const { register, handleSubmit, errors, isSubmitting } =
    useContactForm('contact');

  return (
    <section id="contact" className="py-16 bg-[#003b73] text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Contact information with icons */}
          <AnimationWrapper animation="slideLeft">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-slight">
                Contact Us
              </h2>
              <p className="mb-8 text-white/80">
                Our team of experienced lawyers are ready to assist you with
                your legal matters. Contact us today for a confidential
                consultation.
              </p>
              <div className="space-y-6">
                {/* Phone contact information */}
                <div className="flex items-start">
                  <PhoneCall className="h-6 w-6 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-sm hover:text-primary"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                    <p className="text-white/80">Available Mon-Fri: 9am-5pm</p>
                  </div>
                </div>
                {/* Email contact information */}
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-white/80">info@proficientlegal.com.au</p>
                    <p className="text-white/80">
                      We generally respond within 24 hours
                    </p>
                  </div>
                </div>
                {/* Office locations information */}
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-white/80">Sydney, Melbourne</p>
                    <p className="text-white/80">
                      See locations for detailed addresses
                    </p>
                  </div>
                </div>

                {/* Useful Links Section */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/ourteam"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Our Team
                    </Link>
                    <Link
                      href="/locations"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Our Locations
                    </Link>
                    <Link
                      href="/about-us"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Building className="h-4 w-4 mr-2" />
                      About Us
                    </Link>
                    <Link
                      href="/testimonials"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Testimonials
                    </Link>
                    <Link
                      href="/family-law"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Scale className="h-4 w-4 mr-2" />
                      Family Law
                    </Link>
                    <Link
                      href="/property-law"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Scale className="h-4 w-4 mr-2" />
                      Property Law
                    </Link>
                    <Link
                      href="/immigration-law"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Scale className="h-4 w-4 mr-2" />
                      Immigration Law
                    </Link>
                    <Link
                      href="/criminal-law"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Scale className="h-4 w-4 mr-2" />
                      Criminal Law
                    </Link>
                    <Link
                      href="/commercial-law"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Scale className="h-4 w-4 mr-2" />
                      Commercial Law
                    </Link>
                    {/* Facebook Page Link */}
                    <Link
                      href="https://www.facebook.com/ProficientLegal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                      </svg>
                      Facebook Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/* Right column - Contact form */}
          <AnimationWrapper animation="slideRight">
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-2xl font-bold text-[#003b73] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Two-column layout for name and phone fields on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                    >
                      <User className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      {...register('name')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                    >
                      <Phone className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      {...register('phone')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-1 text-[#0056a8]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    {...register('email')}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <FileText className="h-4 w-4 mr-1 text-[#0056a8]" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    {...register('subject')}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-gray-700 mb-1 flex items-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-1 text-[#0056a8]" />
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    {...register('message')}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#003b73] hover:bg-[#005566] py-6 text-lg btn-hover-effect"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
