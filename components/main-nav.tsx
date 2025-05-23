'use client';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  Globe,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Home,
  Info,
  Scale,
  MessageSquare,
  Building,
  Star,
  Contact,
} from 'lucide-react';

export function MainNav() {
  return (
    <nav className="hidden md:flex justify-center">
      <ul className="flex items-center space-x-1">
        <li>
          <Link
            href="/"
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Link>
        </li>

        <li className="relative group">
          <button className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap">
            <Info className="h-4 w-4 mr-2" />
            About Us
            <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" />
          </button>

          <div className="absolute left-0 top-full mt-1.5 w-[500px] rounded-md border bg-popover text-popover-foreground shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="grid gap-3 p-4">
              <Link
                href="/about-us"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground md:col-span-2"
              >
                <div className="flex items-center">
                  <Building className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    About Proficient Legal
                  </div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Learn more about our firm, our values, and our commitment to
                  client satisfaction.
                </p>
              </Link>

              <Link
                href="/teams"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Our Team
                  </div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Meet our team of experienced legal specialists.
                </p>
              </Link>

              <Link
                href="/locations"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Our Locations
                  </div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Visit us at one of our convenient office locations across
                  Australia.
                </p>
              </Link>

              <Link
                href="/testimonials"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Testimonials
                  </div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Read what our clients say about our services.
                </p>
              </Link>
            </div>
          </div>
        </li>

        <li className="relative group">
          <button className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap">
            <Scale className="h-4 w-4 mr-2" />
            Our Services
            <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" />
          </button>

          <div className="absolute left-0 top-full mt-1.5 w-[500px] rounded-md border bg-popover text-popover-foreground shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="grid gap-3 p-4">
              <Link
                href="/family-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Family Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Expert guidance through divorce, child custody, property
                  settlements, and all family law matters.
                </p>
              </Link>

              <Link
                href="/property-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Briefcase className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Property Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Comprehensive property law services for residential and
                  commercial matters.
                </p>
              </Link>

              <Link
                href="/immigration-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Immigration Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Navigating the complexities of Australian immigration law with
                  expert guidance.
                </p>
              </Link>
            </div>
          </div>
        </li>

        <li className="relative group">
          <button className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap">
            <Contact className="h-4 w-4 mr-2" />
            Contact
            <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180" />
          </button>

          <div className="absolute left-0 top-full mt-1.5 w-[500px] rounded-md border bg-popover text-popover-foreground shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="grid gap-3 p-4">
              <a
                href="tel:1300011581"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Call Us
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  1300 011 581 - Available Mon-Fri: 9am-5pm
                </p>
              </a>

              <a
                href="mailto:info@proficientlegal.com.au"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Email Us
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  info@proficientlegal.com.au - We respond within 24 hours
                </p>
              </a>

              <Link
                href="/locations"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-[#0056a8] mr-3" />
                  <div className="text-sm font-medium leading-none">
                    Visit Us
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Sydney, Melbourne - See locations for detailed addresses
                </p>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <Link
            href="/free-enquiry"
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Free Enquiry
          </Link>
        </li>
      </ul>
    </nav>
  );
}
