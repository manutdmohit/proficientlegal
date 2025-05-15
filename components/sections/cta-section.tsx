"use client"

import { Button } from "@/components/ui/button"
import AnimationWrapper from "@/components/animation-wrapper"
import Link from "next/link"
import { Calendar, Phone, Mail, FileText, MessageSquare, User, Send } from "lucide-react"

/**
 * Call-to-Action section component with a contact form.
 * Features a two-column layout with promotional text and an enquiry form.
 *
 * This section is designed to convert visitors into leads by providing
 * an easy way to make initial contact with the firm.
 */
export function CTASection() {
  return (
    <section id="free-enquiry" className="py-16 bg-gray-50">
      <div className="container">
        <AnimationWrapper animation="slideUp">
          {/* White card with shadow for visual prominence */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left column - Promotional text and CTA buttons */}
              <div>
                <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
                  Ready to Discuss Your Legal Needs?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our team of experienced lawyers are here to help. Contact us today for a confidential consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact#consultation">
                    <Button className="bg-[#003b73] hover:bg-[#005566] text-white text-lg px-8 btn-hover-effect">
                      <Calendar className="h-5 w-5 mr-2" />
                      Book a Consultation
                    </Button>
                  </Link>
                  <Link href="tel:1300123456">
                    <Button
                      variant="outline"
                      className="border-[#003b73] text-[#003b73] hover:bg-[#003b73] hover:text-white text-lg px-8 btn-hover-effect"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call 1300 123 456
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right column - Enquiry form */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#003b73] mb-4">Free Enquiry</h3>
                <form className="space-y-4">
                  {/* Two-column layout for name and phone fields on larger screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <User className="h-4 w-4 mr-1 text-[#0056a8]" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <Phone className="h-4 w-4 mr-1 text-[#0056a8]" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="matter" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <FileText className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Legal Matter
                    </label>
                    <select
                      id="matter"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                    >
                      <option>Family Law</option>
                      <option>Property Law</option>
                      <option>Immigration Law</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-[#0056a8]" />
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0056a8] focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#003b73] hover:bg-[#005566] py-6 text-lg btn-hover-effect">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
