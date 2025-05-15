import type { Metadata } from "next"
import AboutUsClientPage from "./AboutUsClientPage"
import { aboutUsMetadata } from "../metadata"

export const metadata: Metadata = aboutUsMetadata

export default function AboutUsPage() {
  return <AboutUsClientPage />
}
