'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';

const OPTIONS = [
  {
    type: 'comprehensive',
    name: 'Comprehensive Consultation Service',
    duration: '1 hr',
    price: 550,
    stripeAmount: 55000,
    description:
      'A full hour with a senior lawyer to discuss your matter in detail, review documents, and provide tailored legal advice.',
    image: '/consultation-1.jpg',
  },
  {
    type: 'targeted',
    name: 'Targeted Consultation',
    duration: '30 mins',
    price: 330,
    stripeAmount: 33000,
    description:
      'A focused 30-minute session for specific questions or a second opinion on your legal issue.',
    image: '/consultation-2.jpg',
  },
  {
    type: 'fast',
    name: 'Fast Consultation',
    duration: '10 mins',
    price: 110,
    stripeAmount: 11000,
    description:
      'A quick consultation for urgent legal questions that need immediate guidance and direction.',
    image: '/consultation-3.jpg',
  },
];

export default function BookingConfirmation() {
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    if (data) {
      setBooking(JSON.parse(data));
    } else {
      router.replace('/book-consultation');
    }
  }, [router]);

  if (!booking) return null;

  const formattedDate = booking.date
    ? format(new Date(booking.date), 'PPP')
    : '';
  const formattedTime = booking.time
    ? format(new Date(`2000-01-01T${booking.time}`), 'h:mm a')
    : '';

  const handleBook = async (option: (typeof OPTIONS)[0]) => {
    setLoading(option.type);
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...booking,
        consultationType: option.type,
        consultationName: option.name,
        consultationPrice: option.price,
        stripeAmount: option.stripeAmount,
        consultationDuration: option.duration,
      }),
    });
    const data = await res.json();
    setLoading(null);
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Error creating checkout session.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Confirm Your Booking
            </h1>
            <p className="text-lg text-gray-600">
              Please review your details and select a consultation option to
              proceed.
            </p>
          </div>

          {/* User Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Your Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Name:</span>{' '}
                  {booking.name}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Email:</span>{' '}
                  {booking.email}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Phone:</span>{' '}
                  {booking.phone}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Date:</span>{' '}
                  {formattedDate}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Time:</span>{' '}
                  {formattedTime}
                </div>
                <div className="mb-2">
                  <span className="font-medium text-gray-700">Service:</span>{' '}
                  {booking.service}
                </div>
              </div>
            </div>
            {booking.message && (
              <div className="mt-4">
                <span className="font-medium text-gray-700">Message:</span>{' '}
                <span className="text-gray-800">{booking.message}</span>
              </div>
            )}
          </div>

          {/* Booking Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPTIONS.map((option) => (
              <div
                key={option.type}
                className="bg-white rounded-xl shadow-md flex flex-col"
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="rounded-t-xl h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2">{option.name}</h3>
                  <div className="text-gray-600 mb-2">
                    {option.duration} &nbsp;|&nbsp;{' '}
                    <span className="font-medium">${option.price}</span>
                  </div>
                  <p className="text-gray-500 mb-4 flex-1">
                    {option.description}
                  </p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-auto"
                    onClick={() => handleBook(option)}
                    disabled={loading === option.type}
                  >
                    {loading === option.type ? 'Redirecting...' : 'Book'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Proficient Legal</h3>
              <p className="text-gray-300">
                Your trusted partner for legal solutions across Australia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Contact Us</h4>
              <p className="text-gray-300">Phone: 1300 456 789</p>
              <p className="text-gray-300">
                Email: info@proficientlegal.com.au
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Proficient Legal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
