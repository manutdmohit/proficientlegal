"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, PhoneCall, Clock, Navigation } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"
import Link from "next/link"

/**
 * Interface for location data structure
 * @property city - Office city name
 * @property address - Full office address
 * @property phone - Office phone number with area code
 */
type Location = {
  city: string
  address: string
  phone: string
}

/**
 * Locations section component displaying the firm's office locations.
 * Features cards with images, addresses, and contact information for each office.
 *
 * Uses AnimationWrapper for scroll-triggered animations to improve engagement.
 */
export function LocationsSection() {
  // Data for office locations - extracted from JSX for better maintainability
  const locations: Location[] = [
    {
      city: "Sydney",
      address: "Level 5, 233 Castlereagh Street, Sydney NSW 2000",
      phone: "02 8006 5135",
    },
    {
      city: "Melbourne",
      address: "Level 4, 180 Queen Street, Melbourne VIC 3000",
      phone: "03 9070 9950",
    },
    {
      city: "Brisbane",
      address: "Level 10, 239 George Street, Brisbane QLD 4000",
      phone: "07 3506 3909",
    },
  ]

  return (
    <section id="locations" className="py-16">
      <div className="container">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">Our Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our convenient office locations across Australia.
            </p>
          </div>
        </AnimationWrapper>

        {/* Locations grid - responsive layout with 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <AnimationWrapper key={location.city} animation="slideUp" delay={0.2 * index}>
              <Card className="h-full shadow-lg flex flex-col">
                {/* City image */}
                <div className="relative h-48">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=400&query=${location.city} city skyline`}
                    alt={location.city}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{location.city} Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  {/* Address with icon */}
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#0056a8] mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  {/* Phone with icon */}
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 text-[#0056a8] mr-2" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                  {/* Add hours with icon */}
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#0056a8] mr-2" />
                    <p className="text-gray-600">Mon-Fri: 9am-5pm</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={`/contact#${location.city.toLowerCase()}`}>
                    <Button
                      variant="outline"
                      className="w-full border-[#0056a8] text-[#0056a8] hover:bg-[#0056a8] hover:text-white"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      Get Directions
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
