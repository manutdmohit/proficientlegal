'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqSchema } from '@/lib/schema';
import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What legal services do you offer?',
    answer:
      'We offer comprehensive legal services including family law, property law, and immigration law consultations. Our expert lawyers provide personalized solutions for all your legal needs.',
  },
  {
    question: 'Where are your offices located?',
    answer:
      'We have offices in Sydney CBD and Melbourne CBD, providing convenient access to legal services in both major cities.',
  },
  {
    question: 'How can I book a consultation?',
    answer:
      'You can book a consultation by calling our office at 1300 011 581 or by visiting our website to schedule an appointment online.',
  },
  {
    question: 'What are your consultation fees?',
    answer:
      'Our consultation fees vary depending on the type of legal service required. We offer competitive rates and can provide a detailed fee structure during your initial consultation.',
  },
  {
    question: 'Do you offer online consultations?',
    answer:
      'Yes, we offer both in-person and online consultations to accommodate your needs and schedule. Our online consultations are conducted via secure video conferencing.',
  },
  {
    question: 'What languages do you support?',
    answer:
      'We provide legal services in English, Mandarin, and Cantonese to better serve our diverse client base.',
  },
  {
    question: 'How long does a typical consultation last?',
    answer:
      'Initial consultations typically last 30-60 minutes, depending on the complexity of your case and the type of legal service required.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#003b73] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0056a8] focus:ring-opacity-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-[#0056a8]">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#0056a8]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#0056a8]" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-600 py-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
