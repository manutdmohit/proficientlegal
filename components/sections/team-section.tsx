"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, UserCircle } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"

/**
 * Interface for team member data structure
 * @property name - Team member's full name
 * @property role - Team member's job title/specialization
 * @property bio - Brief professional biography
 */
type TeamMember = {
  name: string
  role: string
  bio: string
}

/**
 * Team section component showcasing the firm's legal professionals.
 * Features cards with photos, titles, and brief bios of key team members.
 *
 * Uses AnimationWrapper for scroll-triggered animations to improve engagement.
 * Includes a "View All" button to direct users to a complete team page.
 */
export function TeamSection() {
  // Data for team members - extracted from JSX for better maintainability
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Family Law Specialist",
      bio: "Over 15 years of experience in family law with a focus on complex property settlements and child custody matters.",
    },
    {
      name: "Michael Chen",
      role: "Property Law Expert",
      bio: "Specializes in residential and commercial property transactions with extensive experience in property development.",
    },
    {
      name: "Emma Williams",
      role: "Immigration Lawyer",
      bio: "Expert in all aspects of Australian immigration law with a proven track record in complex visa applications.",
    },
  ]

  return (
    <section id="team" className="py-16">
      <div className="container">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">Our Expert Legal Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet our team of experienced legal specialists.</p>
          </div>
        </AnimationWrapper>

        {/* Team members grid - responsive layout with 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimationWrapper key={member.name} animation="slideUp" delay={0.2 * index}>
              <Card className="h-full shadow-lg overflow-hidden flex flex-col">
                {/* Team member photo */}
                <div className="relative h-64">
                  <Image
                    src={`/smiling-woman-curly-brown-hair-headshot.png?height=300&width=300&query=professional headshot of ${member.name} lawyer`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-[#0056a8] font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{member.bio}</p>
                  {/* Link to individual team member profile page with hover effect */}
                  <Link
                    href={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-[#0056a8] font-medium mt-4 hover:underline group"
                  >
                    <UserCircle className="h-4 w-4 mr-1" />
                    Full Profile
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
        {/* View all button with delayed animation */}
        <div className="text-center mt-12">
          <AnimationWrapper animation="slideUp" delay={0.6}>
            <Link href="/about#team">
              <Button className="bg-[#0056a8] hover:bg-[#003b73] btn-hover-effect">View All Team Members</Button>
            </Link>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
