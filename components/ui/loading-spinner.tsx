"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "white"
  className?: string
  text?: string
  showText?: boolean
}

/**
 * Reusable loading spinner component
 *
 * Can be used in any component to indicate loading state
 * with customizable size, color, and optional text.
 */
export function LoadingSpinner({
  size = "md",
  color = "primary",
  className = "",
  text = "Loading...",
  showText = false,
}: LoadingSpinnerProps) {
  // Size mappings
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  // Color mappings
  const colorMap = {
    primary: "text-[#0056a8]",
    white: "text-white",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Loader2 className={cn(sizeMap[size], colorMap[color])} />
      </motion.div>
      {showText && (
        <p className={cn("mt-2 font-medium", color === "primary" ? "text-[#003b73]" : "text-white/90")}>{text}</p>
      )}
    </div>
  )
}
