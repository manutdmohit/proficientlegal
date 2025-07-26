'use client';

import Link from 'next/link';
import {
  Home,
  Users,
  Building,
  Star,
  MapPin,
  Scale,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MessageSquare,
  X,
} from 'lucide-react';

export function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-[#003b73] z-50 p-6">
      <div className="flex justify-end mb-8">
        <button
          className="text-white p-2"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="space-y-6">
        <Link
          href="/"
          className="block text-lg font-medium text-white hover:text-white/90"
          onClick={onClose}
        >
          <Home className="h-5 w-5 inline-block mr-2" />
          Home
        </Link>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white/80">About Us</h3>
          <div className="pl-4 space-y-3">
            <Link
              href="/about-us"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              About Proficient Legal
            </Link>
            <Link
              href="/ourteam"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Our Team
            </Link>
            <Link
              href="/testimonials"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Testimonials
            </Link>
            <Link
              href="/locations"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Our Locations
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white/80">Our Services</h3>
          <div className="pl-4 space-y-3">
            <Link
              href="/family-law"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Family Law
            </Link>
            <Link
              href="/property-law"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Property Law
            </Link>
            <Link
              href="/immigration-law"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Immigration Law
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white/80">Contact</h3>
          <div className="pl-4 space-y-3">
            <a
              href="tel:1300011581"
              className="block text-white hover:text-white/90"
            >
              Call Us: 1300 011 581
            </a>
            <a
              href="mailto:info@proficientlegal.com.au"
              className="block text-white hover:text-white/90"
            >
              Email Us
            </a>
            <Link
              href="/locations"
              className="block text-white hover:text-white/90"
              onClick={onClose}
            >
              Visit Us
            </Link>
          </div>
        </div>
        <Link
          href="/free-enquiry"
          className="block text-lg font-medium text-white hover:text-white/90"
          onClick={onClose}
        >
          Free Enquiry
        </Link>
      </div>
    </div>
  );
}
