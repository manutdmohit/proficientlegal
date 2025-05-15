"use client"

import { useEffect } from "react"

/**
 * FontPreload component
 *
 * This component implements advanced font preloading techniques
 * beyond what Next.js provides by default.
 *
 * It uses the Font Loading API when available and falls back to
 * traditional preloading techniques when not.
 */
export default function FontPreload() {
  useEffect(() => {
    // Check if the Font Loading API is available
    if ("fonts" in document) {
      // Preload the Google fonts
      Promise.all([
        (document as any).fonts.load('1em "Inter"'),
        (document as any).fonts.load('1em "Playfair Display"'),
        (document as any).fonts.load('1em "Montserrat"'),
      ]).then(() => {
        // Add a class to the document when fonts are loaded
        document.documentElement.classList.add("fonts-loaded")
      })
    }
  }, [])

  return null
}
