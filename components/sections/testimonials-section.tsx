"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"

/**
 * Interface for testimonial data structure
 * @property name - Client's name
 * @property location - Client's location (city)
 * @property text - The testimonial content
 */
type Testimonial = {
  name: string
  location: string
  text: string
}

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
      name: "Rebecca M.",
      location: "Sydney",
      text: "The team at Proficient Legal guided me through my divorce with compassion and professionalism. They made a difficult time much easier to navigate.",
    },
    {
      name: "James T.",
      location: "Melbourne",
      text: "I was impressed by how clearly they explained the property purchase process. They secured a smooth settlement for me and were always available when I had questions.",
    },
    {
      name: "Sophia L.",
      location: "Brisbane",
      text: "When it came to my partner visa application, Proficient Legal was exceptional. Their knowledge of immigration law is outstanding, and they made the process stress-free.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-[#003b73] text-white">
      <div className="container">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tracking-slight">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto opacity-80">Read testimonials from our satisfied clients.</p>
          </div>
        </AnimationWrapper>

        {/* Testimonials grid - responsive layout with 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={testimonial.name} animation="slideUp" delay={0.2 * index}>
              {/* Semi-transparent card with backdrop blur for modern glass effect */}
              <Card className="h-full bg-white/10 backdrop-blur border-none text-white flex flex-col">
                <CardHeader>
                  {/* 5-star rating display */}
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Testimonial quote with italic styling */}
                  <p className="mb-4 italic tracking-normal relative pl-6">
                    <Quote className="h-5 w-5 text-white/40 absolute left-0 top-0" />"{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
