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
import { Location } from '@/types/location';
import { LOCATIONS_CONFIG } from '@/lib/config/locations';

interface LocationCardProps {
  location: Location;
  index: number;
}

/**
 * LocationCard Component
 *
 * Displays information about a specific office location including address,
 * contact details, and available services.
 *
 * @component
 * @param {LocationCardProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export const LocationCard: React.FC<LocationCardProps> = ({
  location,
  index,
}) => {
  return (
    <Card
      className="h-full shadow-lg flex flex-col"
      data-testid={`location-card-${location.city}`}
    >
      {/* City image */}
      <div className="relative h-48 w-full">
        <Image
          src={`/abstract-geometric-shapes.png?height=200&width=400&query=${location.city} city skyline`}
          alt={`Top Legal Consultation Services in ${location.city} - Proficient Legal ${location.city} Office - Expert Lawyers & Legal Advice`}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">
          {location.city} Legal Consultation Office
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
            href={`tel:${LOCATIONS_CONFIG.contactInfo.phone}`}
            className="text-sm text-gray-600 hover:text-primary"
            aria-label={`Call our ${location.city} legal consultation office`}
          >
            {LOCATIONS_CONFIG.contactInfo.phone}
          </a>
        </div>
        {/* Add hours with icon */}
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-[#0056a8] mr-2" />
          <p className="text-gray-600">
            {LOCATIONS_CONFIG.defaultBusinessHours}
          </p>
        </div>
        {/* Consultation services */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-semibold text-[#003b73]">
            Professional Legal Consultation Services:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            {location.services?.map((service, idx) => (
              <li key={idx}>• {service}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Our experienced lawyers provide personalized legal solutions and
            strategic guidance for your specific case. Book a consultation today
            for professional legal assistance.
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          aria-label={`Get directions to our ${location.city} legal consultation office`}
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
  );
};
