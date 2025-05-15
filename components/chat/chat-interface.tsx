"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ChatInterfaceProps {
  onClose: () => void
}

// Mock data for legal questions and answers
const mockResponses: Record<string, string> = {
  default: "I'm not sure about that. Could you ask something related to family law, property law, or immigration law?",
  greeting: "Hello! How can I assist you with your legal questions today?",
  family:
    "Family law covers divorce, child custody, child support, and property settlements. In Australia, the Family Law Act 1975 is the main legislation governing these matters. What specific aspect of family law are you interested in?",
  divorce:
    "In Australia, you need to be separated for at least 12 months before you can apply for a divorce. The process involves filing an application with the Federal Circuit and Family Court of Australia. Would you like more specific information about the divorce process?",
  custody:
    "Child custody (now legally referred to as 'parenting arrangements') in Australia focuses on the best interests of the child. The court considers factors like the child's relationship with each parent, each parent's ability to provide for the child's needs, and any history of family violence. Would you like to know more about specific aspects of parenting arrangements?",
  property:
    "Property law in Australia covers ownership, transfers, and disputes related to real estate. The process typically involves contracts of sale, property inspections, and settlement. Different states may have varying regulations. What specific property law matter are you interested in?",
  immigration:
    "Australian immigration law is complex and covers various visa types, including work visas, family visas, and humanitarian visas. The Department of Home Affairs manages immigration matters. What specific immigration question do you have?",
  visa: "Australia offers numerous visa types, including skilled work visas, family visas, student visas, and visitor visas. Each has specific eligibility requirements and application processes. Which visa type are you interested in learning more about?",
}

// Function to find the best mock response based on keywords in the question
function findMockResponse(question: string): string {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("hello") || lowerQuestion.includes("hi") || lowerQuestion.includes("hey")) {
    return mockResponses.greeting
  } else if (
    lowerQuestion.includes("family") ||
    lowerQuestion.includes("divorce") ||
    lowerQuestion.includes("custody") ||
    lowerQuestion.includes("child support")
  ) {
    if (lowerQuestion.includes("divorce")) {
      return mockResponses.divorce
    } else if (lowerQuestion.includes("custody") || lowerQuestion.includes("child")) {
      return mockResponses.custody
    }
    return mockResponses.family
  } else if (
    lowerQuestion.includes("property") ||
    lowerQuestion.includes("real estate") ||
    lowerQuestion.includes("house") ||
    lowerQuestion.includes("land")
  ) {
    return mockResponses.property
  } else if (
    lowerQuestion.includes("immigration") ||
    lowerQuestion.includes("visa") ||
    lowerQuestion.includes("migrate")
  ) {
    if (lowerQuestion.includes("visa")) {
      return mockResponses.visa
    }
    return mockResponses.immigration
  }

  return (
    mockResponses.default +
    "\n\nPlease note: This is general information only and not legal advice. Consult with a qualified lawyer for advice specific to your situation."
  )
}

// Message type definition
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your legal assistant. I can help answer questions about family law, property law, and immigration law. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI thinking
    setIsLoading(true)

    // Simulate response delay (between 1-3 seconds)
    const delay = Math.floor(Math.random() * 2000) + 1000
    setTimeout(() => {
      const response = findMockResponse(userMessage.content)

      // Add AI response with disclaimer
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          response +
          "\n\nPlease note: This is general information only and not legal advice. Consult with a qualified lawyer for advice specific to your situation.",
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, delay)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="bg-[#0056a8] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={30} height={30} className="mr-2" />
          <h3 className="font-semibold">Legal Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-[#003b73]">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {showDisclaimer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-sm text-amber-800"
          >
            <p className="font-medium mb-1">Disclaimer</p>
            <p className="text-xs">
              This chatbot provides general information only and not legal advice. The answers might not be correct or
              applicable to your specific situation. Please consult with a qualified lawyer for professional advice.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-1 h-7 text-xs text-amber-800 hover:bg-amber-100"
              onClick={() => setShowDisclaimer(false)}
            >
              Dismiss
            </Button>
          </motion.div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={cn("mb-4 flex", message.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] rounded-lg p-3 whitespace-pre-line",
                message.role === "user"
                  ? "bg-[#0056a8] text-white rounded-tr-none"
                  : "bg-white border border-gray-200 rounded-tl-none",
              )}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none max-w-[80%] p-3">
              <Loader2 className="h-5 w-5 animate-spin text-[#0056a8]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your legal question..."
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0056a8] focus:border-transparent"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#0056a8] hover:bg-[#003b73] rounded-l-none"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Disclaimer: The information provided is not legal advice and may not be accurate.
        </p>
      </form>
    </div>
  )
}

function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}
