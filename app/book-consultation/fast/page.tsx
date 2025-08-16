import FastConsultationPage from './FastConsultationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Legal Consultation | Proficient Legal',
  description:
    'Book a quick 10-minute consultation for urgent legal questions that need immediate guidance and direction.',
  keywords:
    'fast legal consultation, 10 minute lawyer consultation, urgent legal advice, quick legal guidance, immediate legal help',
};

export default function FastConsultation() {
  return <FastConsultationPage />;
}
