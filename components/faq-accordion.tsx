"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

/**
 * FAQ Accordion component
 *
 * Displays a list of frequently asked questions in an expandable accordion format
 * with smooth animations and arrow indicators.
 *
 * @param items - Array of FAQ items with questions and answers
 */
export default function FaqAccordion({ items }: FaqAccordionProps) {
  // State to track which FAQ item is expanded (if any)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Toggle expanded state for an item
  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Question header - clickable to expand/collapse */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#0056a8] focus:ring-inset"
            aria-expanded={expandedIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-[#0056a8] mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-[#003b73]">{item.question}</h3>
            </div>
            <motion.div
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-4"
            >
              <ChevronDown className="h-6 w-6 text-[#0056a8]" />
            </motion.div>
          </button>

          {/* Answer content - animated expansion/collapse */}
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                id={`faq-content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
