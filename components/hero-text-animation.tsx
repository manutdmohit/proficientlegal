"use client"

import { motion } from "framer-motion"

interface HeroTextAnimationProps {
  text: string
  className?: string
  delay?: number
}

/**
 * Animated hero text component that reveals text word by word with a staggered animation.
 *
 * @param text - The text content to animate
 * @param className - Additional CSS classes to apply to the container
 * @param delay - Delay before animation starts (in seconds)
 */
export default function HeroTextAnimation({ text, className = "", delay = 0 }: HeroTextAnimationProps) {
  // Split text into words
  const words = text.split(" ")

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }

  // Animation variants for each word
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-[0.3em]" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
