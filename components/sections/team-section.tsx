'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronRight, UserCircle } from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';

/**
 * Interface for team member data structure
 * @property name - Team member's full name
 * @property role - Team member's job title/specialization
 * @property bio - Brief professional biography
 */
type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

/**
 * Team section component showcasing the firm's legal professionals.
 * Features cards with photos, titles, and brief bios of key team members.
 *
 * Uses AnimationWrapper for scroll-triggered animations to improve engagement.
 */
export function TeamSection() {
  // Data for team members - extracted from JSX for better maintainability
  const teamMembers: TeamMember[] = [
    {
      name: 'Nischal Pokharel',
      role: 'Principal Solicitor / Director',
      bio: 'Leading our legal team with extensive experience in various areas of law and a strong commitment to client success.',
    },
    {
      name: 'Steven Stefanic',
      role: 'Principal Director / Director',
      bio: "Bringing strategic leadership and deep legal expertise to drive our firm's vision and client-focused approach.",
    },
    {
      name: 'Darren Ho',
      role: 'Solicitor',
      bio: 'Dedicated legal professional providing expert counsel and representation across a range of legal matters.',
    },
  ];

  return (
    <section id="team" className="py-16">
      <div className="container">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
              Our Expert Legal Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced legal specialists.
            </p>
          </div>
        </AnimationWrapper>

        {/* Team members grid - responsive layout with 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimationWrapper
              key={member.name}
              animation="slideUp"
              delay={0.2 * index}
            >
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
                  <CardDescription className="text-[#0056a8] font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{member.bio}</p>
                  {/* Link to individual team member profile page with hover effect */}
                  <Link
                    href={`/team/${member.name
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
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
      </div>
    </section>
  );
}
