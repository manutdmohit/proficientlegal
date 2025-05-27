'use client';

import { useState } from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/button';
import {
  User,
  FileText,
  MessageSquare,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import { motion } from 'framer-motion';
import { LOCATIONS_CONFIG } from '@/lib/config/locations';

export default function ContactPage() {
  const { register, handleSubmit, errors, isSubmitting } =
    useContactForm('contact');
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <main className="min-h-screen bg-gray-50 pt-[80px] md:pt-[120px] contact-mobile-padding">
      <Header />

      {/* Hero section */}
      <section className="relative py-20 bg-[#003b73] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003b73] to-[#005566] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/80 mb-8"
            >
              Our team of experienced lawyers are ready to assist you with your
              legal matters. Contact us today for a confidential consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="tel:1300011581">
                <Button className="bg-white text-[#003b73] hover:bg-white/90">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {LOCATIONS_CONFIG.contactInfo.phone}
                </Button>
              </a>

              <a href="mailto:info@proficientlegal.com.au">
                <Button className="bg-white text-[#003b73] hover:bg-white/90">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick contact info */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center p-6 bg-gray-50 rounded-lg"
            >
              <Phone className="h-8 w-8 text-[#003b73] mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">
                  {LOCATIONS_CONFIG.contactInfo.phone}
                </p>
                <p className="text-sm text-gray-500">
                  {LOCATIONS_CONFIG.defaultBusinessHours}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center p-6 bg-gray-50 rounded-lg"
            >
              <Mail className="h-8 w-8 text-[#003b73] mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  {LOCATIONS_CONFIG.contactInfo.email}
                </p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center p-6 bg-gray-50 rounded-lg"
            >
              <MapPin className="h-8 w-8 text-[#003b73] mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p className="text-gray-600">Sydney, Melbourne</p>
                <p className="text-sm text-gray-500">Multiple Locations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left column - Contact information */}
                <div className="p-8 bg-[#003b73] text-white">
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Building className="h-6 w-6 mr-4 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Our Offices</h3>
                        <p className="text-white/80">Sydney Office</p>
                        <p className="text-white/80">
                          {LOCATIONS_CONFIG.locations.sydney.address}
                        </p>
                        <p className="text-white/80 mt-2">Melbourne Office</p>
                        <p className="text-white/80">
                          {LOCATIONS_CONFIG.locations.melbourne.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-4 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-white/80">
                          {LOCATIONS_CONFIG.defaultBusinessHours}
                        </p>
                        <p className="text-white/80">
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <h3 className="font-semibold mb-4">Emergency Contact</h3>
                      <p className="text-white/80">
                        For urgent legal matters outside business hours, please
                        call our emergency line:
                      </p>
                      <a
                        href={`tel:${LOCATIONS_CONFIG.contactInfo.phone}`}
                        className="text-white hover:text-white/80 font-semibold mt-2 inline-block"
                      >
                        {LOCATIONS_CONFIG.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right column - Contact form */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#003b73] mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
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
                          className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
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
                        className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
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
                        className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
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
                        className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#003b73] mb-8 text-center">
              Our Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Sydney Office</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.008761387876!2d151.10611989999998!3d-33.966614299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b918c915886d%3A0x831b87d7b3b73802!2sProficient%20Legal!5e0!3m2!1sen!2snp!4v1748345384330!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-gray-600">
                  {LOCATIONS_CONFIG.locations.sydney.address}
                </p>
                <p className="text-gray-600 mt-2">
                  Phone: {LOCATIONS_CONFIG.locations.sydney.phone}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Melbourne Office</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.042491248897!2d144.9713368!3d-37.8358911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681d6bf5538b%3A0x5b9dcebd82d23269!2sSuite%20220%2C%20222%2C%20Level%202%2F1%20Queens%20Rd%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2snp!4v1748345572636!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="text-gray-600">
                  {LOCATIONS_CONFIG.locations.melbourne.address}
                </p>
                <p className="text-gray-600 mt-2">
                  Phone: {LOCATIONS_CONFIG.locations.melbourne.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
