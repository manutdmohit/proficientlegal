'use client';

import type React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  UserSquare2,
  Building2,
  StampIcon as Passport,
  ChevronRight,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import Link from 'next/link';

/**
 * Interface for practice area data structure
 * @property icon - React node representing the practice area icon
 * @property title - Name of the practice area
 * @property id - Unique identifier used for anchor links and DOM IDs
 * @property description - Brief description of the practice area
 * @property items - Array of services offered within this practice area
 */
type PracticeArea = {
  icon: React.ReactNode;
  title: string;
  id: string;
  description: string;
  items: string[];
};

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
      icon: (
        <UserSquare2
          className="h-8 w-8 md:h-12 md:w-12 text-[#0056a8] mb-2"
          aria-hidden="true"
        />
      ),
      title: 'Family Law',
      id: 'family-law',
      description:
        'Expert family law services in Sydney and Melbourne. Specializing in divorce, child custody, and property settlements. Find the best family lawyers in Australia.',
      items: [
        'Divorce & Separation',
        'Child Custody & Support',
        'Property Settlements',
        'Parenting Orders',
        'Family Law Mediation',
      ],
    },
    {
      icon: (
        <Building2
          className="h-8 w-8 md:h-12 md:w-12 text-[#0056a8] mb-2"
          aria-hidden="true"
        />
      ),
      title: 'Property Law',
      id: 'property-law',
      description:
        'Comprehensive property law services in Sydney and Melbourne. Expert guidance for property transactions, leasing, and property disputes. Top property lawyers in Australia.',
      items: [
        'Property Purchases & Sales',
        'Leasing & Tenancy Disputes',
        'Property Development',
        'Commercial Property Law',
        'Property Disputes Resolution',
      ],
    },
    {
      icon: (
        <Passport
          className="h-8 w-8 md:h-12 md:w-12 text-[#0056a8] mb-2"
          aria-hidden="true"
        />
      ),
      title: 'Immigration Law',
      id: 'immigration-law',
      description:
        'Expert immigration law services in Sydney and Melbourne. Specializing in visa applications, citizenship, and migration support. Leading immigration lawyers in Australia.',
      items: [
        'Visa Applications',
        'Permanent Residency',
        'Citizenship Applications',
        'Partner Visas',
        'Business Migration',
      ],
    },
  ];

  return (
    <section id="services" className="py-8 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003b73] mb-3 md:mb-4 tracking-slight">
              Expert Legal Services in Sydney & Melbourne
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
              Find the best lawyers in Australia for family law, property law,
              and immigration law. Professional legal services in Sydney CBD,
              Melbourne, and across Australia.
            </p>
          </div>
        </AnimationWrapper>

        {/* Practice area cards grid - responsive layout with 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {practiceAreas.map((practice, index) => (
            <AnimationWrapper
              key={practice.title}
              animation="slideUp"
              delay={0.2 * index}
            >
              <Card
                id={practice.id}
                className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                {/* Colored accent bar at top of card */}
                <div className="bg-[#0056a8] h-2 w-full"></div>
                <CardHeader className="pb-2 px-4 md:px-6 pt-4 md:pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 md:h-12 md:w-12 text-[#0056a8]">
                      {practice.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl card-title">
                      {practice.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow px-4 md:px-6">
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {practice.description}
                  </p>
                  <ul
                    className="space-y-1.5 md:space-y-2 mb-4 md:mb-6"
                    aria-label={`${practice.title} services`}
                  >
                    {practice.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-sm md:text-base"
                      >
                        <ChevronRight
                          className="h-4 w-4 md:h-5 md:w-5 text-[#0056a8] mr-2 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto px-4 md:px-6 pb-4 md:pb-6">
                  <Link
                    href={`/${practice.id}`}
                    aria-label={`Learn more about our ${practice.title} services in Sydney and Melbourne`}
                    className="w-full"
                  >
                    <Button className="w-full bg-[#0056a8] hover:bg-[#003b73] text-white text-sm md:text-base py-2 md:py-3 btn-hover-effect">
                      Learn More About {practice.title}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
