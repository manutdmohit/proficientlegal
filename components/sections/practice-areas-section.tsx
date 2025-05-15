"use client"

import type React from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserSquare2, Building2, StampIcon as Passport, ChevronRight } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"
import Link from "next/link"

/**
 * Interface for practice area data structure
 * @property icon - React node representing the practice area icon
 * @property title - Name of the practice area
 * @property id - Unique identifier used for anchor links and DOM IDs
 * @property description - Brief description of the practice area
 * @property items - Array of services offered within this practice area
 */
type PracticeArea = {
  icon: React.ReactNode
  title: string
  id: string
  description: string
  items: string[]
}

/**
 * Practice Areas section component displaying the firm's main service categories.
 * Each practice area is presented in a card with icon, description, and key services.
 *
 * Uses AnimationWrapper for scroll-triggered animations to improve engagement.
 */
export function PracticeAreasSection() {
  // Data for practice areas - extracted from JSX for better maintainability
  const practiceAreas: PracticeArea[] = [
    {
      icon: <UserSquare2 className="h-12 w-12 text-[#0056a8] mb-2" aria-hidden="true" />,
      title: "Family Law",
      id: "family-law",
      description: "Expert guidance through divorce, child custody, property settlements, and all family law matters.",
      items: ["Divorce & Separation", "Child Custody & Support", "Property Settlements"],
    },
    {
      icon: <Building2 className="h-12 w-12 text-[#0056a8] mb-2" aria-hidden="true" />,
      title: "Property Law",
      id: "property-law",
      description: "Comprehensive property law services for residential and commercial matters.",
      items: ["Property Purchases & Sales", "Leasing & Tenancy Disputes", "Property Development"],
    },
    {
      icon: <Passport className="h-12 w-12 text-[#0056a8] mb-2" aria-hidden="true" />,
      title: "Immigration Law",
      id: "immigration-law",
      description: "Navigating the complexities of Australian immigration law with expert guidance.",
      items: ["Visa Applications", "Permanent Residency", "Citizenship Applications"],
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">Our Practice Areas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services tailored to your specific needs.
            </p>
          </div>
        </AnimationWrapper>

        {/* Practice area cards grid - responsive layout with 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceAreas.map((practice, index) => (
            <AnimationWrapper key={practice.title} animation="slideUp" delay={0.2 * index}>
              <Card
                id={practice.id}
                className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                {/* Colored accent bar at top of card */}
                <div className="bg-[#0056a8] h-2 w-full"></div>
                <CardHeader className="pb-2">
                  {practice.icon}
                  <CardTitle className="text-xl card-title">{practice.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{practice.description}</p>
                  <ul className="space-y-2 mb-6" aria-label={`${practice.title} services`}>
                    {practice.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={`/${practice.id}`} aria-label={`Learn more about our ${practice.title} services`}>
                    <Button className="w-full bg-[#0056a8] hover:bg-[#003b73] text-white btn-hover-effect">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
