'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';

/**
 * Interface for testimonial data structure
 * @property name - Client's name
 * @property location - Client's location (city)
 * @property text - The testimonial content
 */
type Testimonial = {
  name: string;
  location: string;
  text: string;
};

/**
 * Testimonials section component displaying client feedback.
 * Features a dark background with semi-transparent cards for visual contrast.
 *
 * Uses AnimationWrapper for scroll-triggered animations to improve engagement.
 * Each testimonial includes a 5-star rating, quote, client name and location.
 */
export function TestimonialsSection() {
  // Data for testimonials - extracted from JSX for better maintainability
  const testimonials: Testimonial[] = [
    {
      name: 'Rebecca M.',
      location: 'Sydney',
      text: 'The team at Proficient Legal guided me through my divorce with compassion and professionalism. They made a difficult time much easier to navigate.',
    },
    {
      name: 'James T.',
      location: 'Melbourne',
      text: 'I was impressed by how clearly they explained the property purchase process. They secured a smooth settlement for me and were always available when I had questions.',
    },
    {
      name: 'Sophia L.',
      location: 'Brisbane',
      text: 'When it came to my partner visa application, Proficient Legal was exceptional. Their knowledge of immigration law is outstanding, and they made the process stress-free.',
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-[#003b73] text-white">
      <div className="container px-2 md:px-4">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-slight">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm md:text-base max-w-2xl md:max-w-3xl mx-auto opacity-80">
              Read testimonials from our satisfied clients.
            </p>
          </div>
        </AnimationWrapper>

        {/* Testimonials grid - responsive layout with 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper
              key={testimonial.name}
              animation="slideUp"
              delay={0.2 * index}
            >
              {/* Responsive card with improved font sizes and padding */}
              <Card className="h-[260px] sm:h-[280px] md:h-[300px] w-full bg-white/10 backdrop-blur border-none text-white flex flex-col px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
                <CardHeader className="flex-none pb-2 md:pb-3">
                  {/* 5-star rating display */}
                  <div className="flex text-yellow-400 mb-1 md:mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-current"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  {/* Testimonial quote with italic styling */}
                  <p className="mb-2 md:mb-4 italic tracking-normal relative pl-6 flex-grow text-xs sm:text-sm md:text-base">
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-white/40 absolute left-0 top-0" />
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-xs sm:text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm opacity-80">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
