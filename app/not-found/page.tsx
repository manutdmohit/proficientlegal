import type { Metadata } from "next"
import NotFoundPage from "../not-found"

export const metadata: Metadata = {
  title: "404 Not Found | Proficient Legal",
  description: "Sorry, the page you are looking for does not exist. Return to Proficient Legal's homepage or contact support for assistance.",
}

export default function NotFound() {
  return <NotFoundPage />
} 