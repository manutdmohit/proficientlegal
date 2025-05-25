import type { Metadata } from 'next';
import { teamsMetadata } from '../metadata';
import { TeamSection } from '@/components/sections/team-section';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = teamsMetadata;

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#003b73] mb-8 text-center">
          Our Legal Team
        </h1>
        <TeamSection />
      </div>
      <ContactSection />
    </main>
  );
}
