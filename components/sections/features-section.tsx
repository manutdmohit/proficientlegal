'use client';

import type React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  HeartHandshake,
  GraduationCap,
  MessageSquare,
  Trophy,
} from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';

/**
 * Interface for feature data structure
 * @property icon - React node representing the feature icon
 * @property title - Name of the feature/benefit
 * @property description - Detailed description of the feature
 */
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

/**
 * Features section component highlighting the firm's key differentiators.
 * Displays a grid of cards with icons and descriptions of why clients should
 * choose this law firm over competitors.
 *
 * Uses AnimationWrapper for scroll-triggered animations to improve engagement.
 */
export function FeaturesSection() {
  // Data for features - extracted from JSX for better maintainability
  const features: Feature[] = [
    {
      icon: <HeartHandshake className="h-12 w-12 text-[#0056a8] mb-2" />,
      title: 'Client-Focused Approach',
      description:
        'We put your needs first, providing personalized legal solutions tailored to your specific situation.',
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-[#0056a8] mb-2" />,
      title: 'Experienced Specialists',
      description:
        'Our team consists of highly experienced legal specialists with proven track records in their fields.',
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#0056a8] mb-2" />,
      title: 'Clear Communication',
      description:
        'We explain complex legal matters in simple terms, keeping you informed throughout the process.',
    },
    {
      icon: <Trophy className="h-12 w-12 text-[#0056a8] mb-2" />,
      title: 'Exceptional Service',
      description:
        'Recognized for excellence in legal services across Australia with guaranteed client satisfaction.',
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003b73] mb-3 md:mb-4 tracking-slight">
              Why Choose Proficient Legal
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Our team of experienced lawyers are dedicated to providing you
              with expert legal advice and representation.
            </p>
          </div>
        </AnimationWrapper>

        {/* Features grid - responsive layout with 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <AnimationWrapper
              key={feature.title}
              animation="slideUp"
              delay={0.1 * index}
            >
              <Card className="h-full shadow-lg flex flex-col">
                <CardHeader className="pb-2 px-4 md:px-6 pt-4 md:pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 md:h-12 md:w-12 text-[#0056a8]">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
