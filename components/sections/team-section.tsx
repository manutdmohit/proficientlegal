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

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Nischal Pokharel',
      role: 'Principal Solicitor / Director',
      bio: 'Leading our legal team with extensive experience in various areas of law and a strong commitment to client success.',
      image: '/images/teams/nischal-pokharel.jpg',
    },
    {
      name: 'Steven Stefanic',
      role: 'Principal Director / Director',
      bio: "Bringing strategic leadership and deep legal expertise to drive our firm's vision and client-focused approach.",
      image: '/images/teams/steven-stefanic.jpg',
    },
    {
      name: 'Darren Ho',
      role: 'Solicitor',
      bio: 'Dedicated legal professional providing expert counsel and representation across a range of legal matters.',
      image: '/images/teams/darren-ho.jpg',
    },
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003b73] mb-4">
              Our Expert Legal Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced legal specialists.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimationWrapper
              key={member.name}
              animation="slideUp"
              delay={index * 0.15}
            >
              <Card className="shadow-lg flex flex-col">
                {/* IMAGE (overflow ONLY here) */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-[#0056a8] font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>

                  <Link
                    href={`/team/${slugify(member.name)}`}
                    className="mt-4 inline-flex items-center text-[#0056a8] font-medium hover:underline group"
                  >
                    <UserCircle className="h-4 w-4 mr-1" />
                    Full Profile
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
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
