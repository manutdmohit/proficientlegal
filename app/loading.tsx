"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

/**
 * Global loading component for server-side transitions
 *
 * This component is automatically used by Next.js when navigating between routes
 * that require server-side data fetching. It provides a centered loading spinner
 * with a subtle animation to indicate loading state.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Loader2 className="h-12 w-12 text-[#0056a8]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-[#003b73] font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}
