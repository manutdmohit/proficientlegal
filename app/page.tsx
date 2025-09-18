import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Proficient Legal | Family, Property & Immigration Law Specialists',
  description:
    'Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia with offices in Sydney, Melbourne, and Brisbane. Expert Nepali-speaking lawyers available for the Nepali community.',
  // Meta keywords removed - focus on content optimization
};

export default function Home() {
  return <ClientPage />;
}
