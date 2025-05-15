"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"
import { playfair, montserrat, gtWalsheim } from "./fonts"
import { GlobalLoadingIndicator } from "@/components/global-loading-indicator"
// Import the FontPreload component
import FontPreload from "./font-preload"

// Add the FontPreload component to the layout
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} ${gtWalsheim.variable}`}
    >
      <body className={gtWalsheim.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Font preloading component */}
          <FontPreload />

          {/* Global loading indicator for client-side transitions */}
          <GlobalLoadingIndicator />

          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  )
}
