'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, PhoneCall, Clock, Navigation, Phone } from 'lucide-react';
import AnimationWrapper from '@/components/animation-wrapper';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

/**
 * Interface for location data structure
 * @property city - Office city name
 * @property address - Full office address
 * @property phone - Office phone number with area code
 * @property mapsUrl - Google Maps URL for directions
 */
type Location = {
  city: string;
  address: string;
  phone: string;
  mapsUrl: string;
};

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
      city: 'Sydney',
      address: '10 Park Rd, Hurstville NSW 2220, Australia',
      phone: '02 8006 5135',
      mapsUrl: 'https://maps.app.goo.gl/z1xg6gA3vStce7Dj6',
    },
    {
      city: 'Melbourne',
      address: 'Suite 220/222, Level 2, 1 Queens Road, Melbourne, VIC 3004',
      phone: '03 9070 9950',
      mapsUrl: 'https://maps.app.goo.gl/Xs3GXj8dBmXsDvHU8',
    },
  ];

  return (
    <section id="locations" className="py-16">
      <div className="container">
        {/* Section heading with animation */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003b73] mb-4 tracking-slight">
              Our Locations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our convenient office locations across
              Australia.
            </p>
          </div>
        </AnimationWrapper>

        {/* Locations grid - responsive layout with 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl">
          {locations.map((location, index) => (
            <AnimationWrapper
              key={location.city}
              animation="slideUp"
              delay={0.2 * index}
            >
              <Card className="h-full shadow-lg flex flex-col">
                {/* City image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=200&width=400&query=${location.city} city skyline`}
                    alt={location.city}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {location.city} Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  {/* Address with icon */}
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#0056a8] mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  {/* Phone with icon */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-sm text-gray-600 hover:text-primary"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  {/* Add hours with icon */}
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#0056a8] mr-2" />
                    <p className="text-gray-600">Mon-Fri: 9am-5pm</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#0056a8] text-[#0056a8] hover:bg-[#0056a8] hover:text-white"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
