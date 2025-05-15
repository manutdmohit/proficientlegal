import { Playfair_Display, Montserrat, Inter } from "next/font/google"

// Use Inter as a replacement for GT Walsheim Pro
export const gtWalsheim = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gt-walsheim",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

// Elegant serif font for headings
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  fallback: ["Georgia", "serif"],
})

// Clean sans-serif font for body text
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})
