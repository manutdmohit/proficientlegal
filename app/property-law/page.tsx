import type { Metadata } from "next"
import { propertyLawMetadata } from "../metadata"
import PropertyLawClientPage from "./PropertyLawClientPage"

export const metadata: Metadata = propertyLawMetadata

export default function PropertyLawPage() {
  return <PropertyLawClientPage />
}
