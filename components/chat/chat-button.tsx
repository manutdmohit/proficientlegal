"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import ChatInterface from "./chat-interface"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false)

  // Simulate receiving a new message after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasUnreadMessages(true)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [isOpen])

  // Clear unread indicator when chat is opened
  useEffect(() => {
    if (isOpen && hasUnreadMessages) {
      setHasUnreadMessages(false)
    }
  }, [isOpen, hasUnreadMessages])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 md:right-10 z-50 w-[350px] md:w-[400px] h-[600px] max-h-[calc(100vh-120px)] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <ChatInterface onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 md:right-10 z-50"
      >
        <div className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
              isOpen
                ? "bg-gray-700 hover:bg-gray-800"
                : "bg-gradient-to-r from-[#0056a8] to-[#003b73] hover:from-[#003b73] hover:to-[#002b53]"
            }`}
            aria-label={isOpen ? "Close chat" : "Open chat"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ scale: 0.5, opacity: 0, rotate: isOpen ? 0 : 180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </Button>

          {/* Unread message indicator */}
          <AnimatePresence>
            {hasUnreadMessages && !isOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">1</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && !isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-2 bg-white px-3 py-2 rounded-lg shadow-md text-sm font-medium text-gray-800 whitespace-nowrap"
              >
                Chat with our legal team
                <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
