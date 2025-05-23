import { LocationsSection } from '@/components/sections/locations-section';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#003b73] mb-8 text-center">
          Our Office Locations
        </h1>
        <LocationsSection />
      </div>
      <ContactSection />
    </main>
  );
}
