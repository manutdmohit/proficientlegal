'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/ui/button';
import { User, FileText, MessageSquare, Send, Phone, Mail } from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';

export default function FreeEnquiryPage() {
  const { register, handleSubmit, errors, isSubmitting } =
    useContactForm('enquiry');

  return (
    <main className="min-h-screen bg-gray-50 pt-[88px]">
      <Header />

      {/* Hero section */}
      <section className="py-12 bg-[#003b73] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Legal Enquiry
            </h1>
            <p className="text-lg text-white/80">
              Get expert legal advice from our experienced team. Fill out the
              form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimationWrapper animation="slideUp">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#003b73] mb-6">
                  Submit Your Enquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                      >
                        <User className="h-4 w-4 mr-1 text-[#0056a8]" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="enquiry-name"
                        {...register('name')}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                        aria-required="true"
                        aria-invalid={errors.name ? 'true' : 'false'}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                      >
                        <Phone className="h-4 w-4 mr-1 text-[#0056a8]" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="enquiry-phone"
                        {...register('phone')}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                        aria-required="true"
                        aria-invalid={errors.phone ? 'true' : 'false'}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="enquiry-email"
                      {...register('email')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-subject"
                      className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="enquiry-subject"
                      {...register('subject')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                      aria-required="true"
                      aria-invalid={errors.subject ? 'true' : 'false'}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                    >
                      <MessageSquare className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Message
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={5}
                      {...register('message')}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                      aria-required="true"
                      aria-invalid={errors.message ? 'true' : 'false'}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600" role="alert">
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
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                  </Button>
                </form>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
