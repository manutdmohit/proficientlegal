import type { Metadata } from "next"
import BookConsultationPage from "./BookConsultationPage"

export const metadata: Metadata = {
  title: "Book a Consultation | Proficient Legal",
  description: "Schedule a consultation with our expert legal team. We offer flexible appointment times and personalized legal advice for your needs.",
  keywords: "legal consultation, book appointment, legal advice, lawyer consultation, legal services",
}

export default function BookConsultation() {
  return <BookConsultationPage />
} 