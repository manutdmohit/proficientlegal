import TargetedConsultationPage from './TargetedConsultationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Targeted Legal Consultation | Proficient Legal',
  description:
    'Book a focused 30-minute consultation for specific legal questions or a second opinion. Get targeted advice from our expert lawyers.',
  keywords:
    'targeted legal consultation, 30 minute lawyer consultation, legal second opinion, focused legal advice, quick legal consultation',
};

export default function TargetedConsultation() {
  return <TargetedConsultationPage />;
}
