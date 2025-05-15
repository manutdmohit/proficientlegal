import type { Metadata } from "next"
import FamilyLawPageClient from "./FamilyLawPageClient"
import { familyLawMetadata } from "../metadata"

export const metadata: Metadata = familyLawMetadata

export default function FamilyLawPage() {
  return <FamilyLawPageClient />
}
