import type { Metadata } from 'next';
import { testimonialsMetadata } from '../metadata';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = testimonialsMetadata;

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#003b73] mb-8 text-center">
          Client Testimonials
        </h1>
        <TestimonialsSection />
      </div>
      <ContactSection />
    </main>
  );
}
