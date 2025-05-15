"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimationWrapper from "@/components/animation-wrapper"
import Link from "next/link"
import { Building2, Users, MessageSquare } from "lucide-react"

/**
 * About section component providing information about the law firm.
 * Features a two-column layout with an image and descriptive text.
 *
 * Uses AnimationWrapper for scroll-triggered animations with different
 * directions for each column to create visual interest.
 */
export function AboutSection() {
  return (
    <section id="about-us" className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column with left-to-right animation */}
          <AnimationWrapper animation="slideLeft">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/legal-team-office.png"
                alt="Proficient Legal Team in Modern Office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" // Responsive image sizing
                priority // Load with high priority as it's likely above the fold
              />
              {/* Gradient overlay to enhance image and improve text contrast if overlaid */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0056a8]/30 to-transparent"></div>
            </div>
          </AnimationWrapper>

          {/* Text content column with right-to-left animation */}
          <AnimationWrapper animation="slideRight">
            <div>
              <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">About Proficient Legal</h2>
              <p className="text-gray-600 mb-4 flex items-start">
                <Building2 className="h-5 w-5 text-[#0056a8] mr-3 mt-1 flex-shrink-0" />
                <span>
                  Proficient Legal is a leading law firm with offices in Sydney, Melbourne, and Brisbane. We specialize
                  in family law, property law, and immigration law, providing expert legal advice with a client-focused
                  approach.
                </span>
              </p>
              <p className="text-gray-600 mb-4 flex items-start">
                <Users className="h-5 w-5 text-[#0056a8] mr-3 mt-1 flex-shrink-0" />
                <span>
                  Our team of experienced lawyers are dedicated to achieving the best possible outcomes for our clients.
                  We understand that legal matters can be complex and emotionally challenging, which is why we provide
                  personalized support throughout the legal process.
                </span>
              </p>
              <p className="text-gray-600 mb-6 flex items-start">
                <MessageSquare className="h-5 w-5 text-[#0056a8] mr-3 mt-1 flex-shrink-0" />
                <span>
                  With a focus on clear communication and practical solutions, we strive to make the legal process as
                  smooth and stress-free as possible for our clients.
                </span>
              </p>
              <Link href="/about">
                <Button className="bg-[#0056a8] hover:bg-[#003b73] btn-hover-effect">Learn More About Us</Button>
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
