'use client';
import { useState, useRef, useEffect } from 'react';
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, menuName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveMenu(activeMenu === menuName ? null : menuName);
    } else if (e.key === 'Escape') {
      setActiveMenu(null);
    }
  };

  // Handle hover events
  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100); // Small delay to prevent flickering
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      className="hidden md:flex justify-center"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex items-center space-x-1" role="menubar">
        <li role="none">
          <Link
            href="/"
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
            role="menuitem"
            aria-label="Go to home page"
          >
            <Home className="h-4 w-4 mr-2" aria-hidden="true" />
            Home
          </Link>
        </li>

        <li
          className="relative group"
          role="none"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={activeMenu === 'about'}
            aria-controls="about-menu"
            onKeyDown={(e) => handleKeyDown(e, 'about')}
          >
            <Info className="h-4 w-4 mr-2" aria-hidden="true" />
            About Us
            <ChevronDown
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
              aria-hidden="true"
            />
          </button>

          <div
            id="about-menu"
            ref={(el) => (menuRefs.current['about'] = el)}
            className={`absolute left-0 top-full mt-1.5 w-[500px] rounded-md border bg-popover text-popover-foreground shadow-lg transition-all duration-200 z-50 ${
              activeMenu === 'about'
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
            }`}
            role="menu"
            aria-label="About Us submenu"
          >
            <div className="grid gap-3 p-4">
              <Link
                href="/about-us"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50 md:col-span-2"
                role="menuitem"
                aria-label="About Proficient Legal"
              >
                <div className="flex items-center">
                  <Building
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
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
                href="/ourteam"
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

        <li
          className="relative group"
          role="none"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={activeMenu === 'services'}
            aria-controls="services-menu"
            onKeyDown={(e) => handleKeyDown(e, 'services')}
          >
            <Scale className="h-4 w-4 mr-2" aria-hidden="true" />
            Our Services
            <ChevronDown
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
              aria-hidden="true"
            />
          </button>

          <div
            id="services-menu"
            ref={(el) => (menuRefs.current['services'] = el)}
            className={`absolute left-0 top-full mt-1.5 w-[500px] rounded-md border bg-popover text-popover-foreground shadow-lg transition-all duration-200 z-50 ${
              activeMenu === 'services'
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
            }`}
            role="menu"
            aria-label="Our Services submenu"
          >
            <div className="grid gap-3 p-4">
              <Link
                href="/family-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Family Law Services"
              >
                <div className="flex items-center">
                  <Users
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
                  <div className="text-sm font-medium leading-none">
                    Family Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Expert family law services including divorce, child custody,
                  and property settlements. Find the best family lawyers in
                  Sydney and Melbourne.
                </p>
              </Link>

              <Link
                href="/property-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Property Law Services"
              >
                <div className="flex items-center">
                  <Briefcase
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
                  <div className="text-sm font-medium leading-none">
                    Property Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Comprehensive property law services including conveyancing,
                  leasing, and property disputes.
                </p>
              </Link>

              <Link
                href="/criminal-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Criminal Law Services"
              >
                <div className="flex items-center">
                  <Scale
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
                  <div className="text-sm font-medium leading-none">
                    Criminal Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Expert criminal defense services including bail applications,
                  court representation, and legal advice.
                </p>
              </Link>

              <Link
                href="/commercial-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Commercial Law Services"
              >
                <div className="flex items-center">
                  <Building
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
                  <div className="text-sm font-medium leading-none">
                    Commercial Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Comprehensive commercial legal services including business
                  formation, contracts, and dispute resolution.
                </p>
              </Link>

              <Link
                href="/immigration-law"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Immigration Law Services"
              >
                <div className="flex items-center">
                  <Globe
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
                  <div className="text-sm font-medium leading-none">
                    Immigration Law
                  </div>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Expert immigration law services including visa applications,
                  citizenship, and migration support. Top immigration lawyers in
                  Australia.
                </p>
              </Link>
            </div>
          </div>
        </li>

        <li
          className="relative group"
          role="none"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={activeMenu === 'contact'}
            aria-controls="contact-menu"
            onKeyDown={(e) => handleKeyDown(e, 'contact')}
          >
            <Contact className="h-4 w-4 mr-2" aria-hidden="true" />
            Contact
            <ChevronDown
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
              aria-hidden="true"
            />
          </button>

          <div
            id="contact-menu"
            ref={(el) => (menuRefs.current['contact'] = el)}
            className={`absolute left-0 top-full mt-1.5 w-[500px] rounded-md border bg-popover text-popover-foreground shadow-lg transition-all duration-200 z-50 ${
              activeMenu === 'contact'
                ? 'opacity-100 visible'
                : 'opacity-0 invisible'
            }`}
            role="menu"
            aria-label="Contact options"
          >
            <div className="grid gap-3 p-4">
              <a
                href="tel:1300011581"
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Call us at 1300 011 581"
              >
                <div className="flex items-center">
                  <Phone
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
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
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Email us at info@proficientlegal.com.au"
              >
                <div className="flex items-center">
                  <Mail
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
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
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-[#0056a8]/50"
                role="menuitem"
                aria-label="Visit our office locations"
              >
                <div className="flex items-center">
                  <MapPin
                    className="h-6 w-6 text-[#0056a8] mr-3"
                    aria-hidden="true"
                  />
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

        <li role="none">
          <Link
            href="/free-enquiry"
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
            role="menuitem"
            aria-label="Submit a free enquiry"
          >
            <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
            Free Enquiry
          </Link>
        </li>

        <li role="none">
          <Link
            href="/contact"
            className="text-white hover:text-white/90 tracking-wide bg-transparent hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2 rounded-md inline-flex h-10 items-center justify-center text-sm font-medium transition-colors whitespace-nowrap"
            role="menuitem"
            aria-label="Contact Us"
          >
            <Contact className="h-4 w-4 mr-2" aria-hidden="true" />
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
