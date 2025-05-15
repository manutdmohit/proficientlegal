"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Global loading indicator for client-side transitions
 *
 * This component shows a progress bar at the top of the page
 * during client-side navigation events. It's inspired by popular
 * libraries like NProgress but implemented with Framer Motion.
 */
export function GlobalLoadingIndicator() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(false)
    setProgress(0)
  }, [pathname, searchParams])

  // Simulate progress for client-side transitions
  useEffect(() => {
    if (isLoading) {
      // Start with initial progress
      setProgress(20)

      // Simulate progress increments
      const timer1 = setTimeout(() => setProgress(40), 100)
      const timer2 = setTimeout(() => setProgress(60), 200)
      const timer3 = setTimeout(() => setProgress(80), 400)

      // Cleanup timers
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isLoading])

  // Listen for route change start/end events
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setProgress(100)
      // Small delay before hiding to show completion
      setTimeout(() => setIsLoading(false), 200)
    }

    // Add event listeners for route changes
    window.addEventListener("beforeunload", handleRouteChangeStart)
    window.addEventListener("load", handleRouteChangeComplete)

    return () => {
      window.removeEventListener("beforeunload", handleRouteChangeStart)
      window.removeEventListener("load", handleRouteChangeComplete)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#0056a8] z-[9999]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  )
}
