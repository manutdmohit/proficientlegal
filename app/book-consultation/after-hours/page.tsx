import AfterHoursConsultationPage from './AfterHoursConsultationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'After Hours Legal Consultation | Proficient Legal',
  description:
    'Book urgent consultations outside of regular business hours. Available M-F 5:30 PM - 9:00 PM and 9:00 AM - 12:00 PM Saturday and Sunday.',
  keywords:
    'after hours legal consultation, urgent legal advice, weekend legal consultation, evening legal consultation, emergency legal help',
};

export default function AfterHoursConsultation() {
  return <AfterHoursConsultationPage />;
}
