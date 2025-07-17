import type { Metadata } from 'next';
import { teamsMetadata } from '../metadata';
import { TeamSection } from '@/components/sections/team-section';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import Image from 'next/image';

export const metadata: Metadata = teamsMetadata;

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white pt-[88px]">
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-10">
        <h1 className="text-4xl font-bold text-[#003b73] mb-8 text-center">
          Our Legal Team
        </h1>
        <div className="flex justify-center mb-8">
          <figure className="w-full max-w-3xl">
            <Image
              src="/images/teams/group-photo.jpg"
              alt="Proficient Legal Team Group Photo"
              width={900}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              priority
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Proficient Legal team group photo
            </figcaption>
          </figure>
        </div>
        <TeamSection />
      </div>
      <ContactSection />
    </main>
  );
}
