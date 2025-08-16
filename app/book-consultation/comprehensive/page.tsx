import ComprehensiveConsultationPage from './ComprehensiveConsultationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprehensive Legal Consultation | Proficient Legal',
  description:
    'Book a comprehensive 1-hour consultation with our senior lawyers. Get detailed legal advice, document review, and tailored solutions for your legal matter.',
  keywords:
    'comprehensive legal consultation, 1 hour lawyer consultation, senior lawyer advice, legal document review, detailed legal advice',
};

export default function ComprehensiveConsultation() {
  return <ComprehensiveConsultationPage />;
}
