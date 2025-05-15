import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Proficient Legal | Family, Property & Immigration Law Specialists",
  description:
    "Pioneering excellence in family, property, and immigration law. Your trusted partner for legal solutions across Australia with offices in Sydney, Melbourne, and Brisbane.",
  keywords:
    "law firm, family law, property law, immigration law, legal services, Sydney lawyers, Melbourne lawyers, Brisbane lawyers, Australian law firm",
}

export default function Home() {
  return <ClientPage />
}
