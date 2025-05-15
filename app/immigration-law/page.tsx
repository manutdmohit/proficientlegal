import type { Metadata } from "next"
import ImmigrationLawPageClient from "./ImmigrationLawPageClient"
import { immigrationLawMetadata } from "../metadata"

export const metadata: Metadata = immigrationLawMetadata

export default function ImmigrationLawPage() {
  return <ImmigrationLawPageClient />
}
