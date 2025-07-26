'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white pt-[88px]">
      {/* Use the site's main Header component */}
      <Header />

      {/* Modern 404 Content with Animation */}
      <main className="flex-grow flex items-center justify-center p-3 sm:p-4 md:p-8 lg:p-12">
        <div className="max-w-4xl w-full bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-blue-50 rounded-full -mt-10 -mr-10 sm:-mt-16 sm:-mr-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-blue-50 rounded-full -mb-8 -ml-8 sm:-mb-12 sm:-ml-12 opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            {/* Left side with 404 and animation */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <div className="animate-bounce-slow mb-2 sm:mb-4">
                <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0056a8] to-[#003b73]">
                  404
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4 text-center md:text-left">
                Page Not Found
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
                The page you're looking for doesn't seem to exist. It might have
                been moved or deleted.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md text-white bg-[#0056a8] hover:bg-[#003b73] transition-all shadow-md hover:shadow-lg"
                >
                  Back to Home
                  <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md text-[#0056a8] bg-white border border-[#0056a8] hover:bg-blue-50 transition-all"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Right side with helpful navigation */}
            <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 sm:pt-8 md:pt-0 md:pl-8 lg:pl-12">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 text-center md:text-left">
                Popular Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/family-law"
                    className="flex items-center text-[#0056a8] hover:text-[#003b73] transition-colors text-sm sm:text-base"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Family Law Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/property-law"
                    className="flex items-center text-[#0056a8] hover:text-[#003b73] transition-colors text-sm sm:text-base"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Property Law Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/immigration-law"
                    className="flex items-center text-[#0056a8] hover:text-[#003b73] transition-colors text-sm sm:text-base"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Immigration Law Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="flex items-center text-[#0056a8] hover:text-[#003b73] transition-colors text-sm sm:text-base"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>About Our Firm</span>
                  </Link>
                </li>
              </ul>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-600">
                  Need immediate assistance? Call our helpline at{' '}
                  <a
                    href="tel:1300011581"
                    className="font-semibold text-[#0056a8]"
                  >
                    1300 011 581
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <ContactSection />
    </div>
  );
};

export default NotFoundPage;
