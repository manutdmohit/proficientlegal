'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Loader2,
  Calendar,
  Clock,
  User,
  Mail,
  MessageSquare,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { ContactSection } from '@/components/sections/contact-section';
import { format } from 'date-fns';

const OPTIONS = [
  {
    type: 'comprehensive',
    name: 'Comprehensive Consultation Service',
    duration: '1 hr',
    price: 550,
    stripeAmount: 55000,
    description:
      'A full hour with a senior lawyer to discuss your matter in detail, review documents, and provide tailored legal advice.',
  },
  {
    type: 'targeted',
    name: 'Targeted Consultation',
    duration: '30 mins',
    price: 330,
    stripeAmount: 33000,
    description:
      'A focused 30-minute session for specific questions or a second opinion on your legal issue.',
  },
  {
    type: 'fast',
    name: 'Fast Consultation',
    duration: '10 mins',
    price: 110,
    stripeAmount: 11000,
    description:
      'A quick consultation for urgent legal questions that need immediate guidance and direction.',
  },
];

export default function BookConsultationPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [selected, setSelected] = useState(OPTIONS[0]);
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    consultationType: '',
    general: '',
  });

  // Add check for existing session on component mount
  useEffect(() => {
    const checkExistingSession = async () => {
      try {
        const res = await fetch('/api/check-session');
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    };
    checkExistingSession();
  }, []);

  // Add effect to fetch booked slots when date changes
  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (form.date) {
        try {
          const response = await fetch(
            `/api/available-slots?date=${form.date}`
          );
          const data = await response.json();
          if (data.bookedSlots) {
            setBookedSlots(data.bookedSlots);
          }
        } catch (error) {
          console.error('Error fetching booked slots:', error);
        }
      }
    };
    fetchBookedSlots();
  }, [form.date]);

  // Add this to get today's date in yyyy-mm-dd format
  const today = format(new Date(), 'yyyy-MM-dd');

  // Add function to check if a date is a weekend
  const isWeekend = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  // Function to validate Australian phone numbers
  const validateAustralianPhone = (phone: string) => {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');

    // Australian phone number patterns:
    // Mobile: 04XX XXX XXX (10 digits starting with 04)
    // Landline: 0X XXXX XXXX (10 digits starting with 02, 03, 07, 08)
    // International format: +61 X XXXX XXXX (11 digits starting with 61)

    if (digitsOnly.length === 10) {
      // Australian domestic format
      return /^0[23478]\d{8}$/.test(digitsOnly);
    } else if (digitsOnly.length === 11 && digitsOnly.startsWith('61')) {
      // International format (+61)
      return /^61[23478]\d{8}$/.test(digitsOnly);
    }

    return false;
  };

  const validateForm = () => {
    const newErrors = {
      name: !form.name ? 'Name is required' : '',
      email: !form.email
        ? 'Email is required'
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? 'Invalid email format'
        : '',
      phone: !form.phone
        ? 'Phone number is required'
        : !validateAustralianPhone(form.phone)
        ? 'Please enter a valid Australian phone number (e.g., 0412 345 678 or +61 412 345 678)'
        : '',
      date: !form.date ? 'Date is required' : '',
      time: !form.time ? 'Time is required' : '',
      consultationType: !selected ? 'Please select a consultation type' : '',
      general: '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      // Reset time when date changes
      if (name === 'date') {
        return { ...prev, [name]: value, time: '' };
      }
      return { ...prev, [name]: value };
    });
    // Clear error when field is modified
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const getAvailableTimeSlots = () => {
    const now = new Date();
    const selectedDate = form.date ? new Date(form.date) : null;
    const isToday = selectedDate?.toDateString() === now.toDateString();

    const slots = [];
    const startHour = isToday ? Math.max(9, now.getHours() + 1) : 9;
    const endHour = 17; // 5 PM

    for (let hour = startHour; hour <= endHour; hour++) {
      const value = `${hour.toString().padStart(2, '0')}:00`;
      // Skip if this time slot is booked
      if (bookedSlots.includes(value)) {
        continue;
      }
      const displayHour = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      slots.push({
        value,
        label: `${displayHour}:00 ${ampm}`,
      });
    }

    return slots;
  };

  const handleProceed = async () => {
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          consultationType: selected.type,
          consultationName: selected.name,
          consultationPrice: selected.price,
          stripeAmount: selected.stripeAmount,
          consultationDuration: selected.duration,
        }),
      });
      const data = await res.json();
      if (data.url) {
        // Store the form data in sessionStorage before redirecting
        sessionStorage.setItem(
          'consultationForm',
          JSON.stringify({
            ...form,
            selectedType: selected.type,
          })
        );
        window.location.href = data.url;
      } else {
        setErrors((prev) => ({
          ...prev,
          general: 'Error creating checkout session.',
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: 'Error creating checkout session.',
      }));
    } finally {
      setLoading(false);
    }
  };

  // Remove the form data restoration effect
  useEffect(() => {
    // Clear any existing form data in sessionStorage
    sessionStorage.removeItem('consultationForm');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white pt-[88px]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="w-16 h-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Legal Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get expert legal advice tailored to your needs. Choose from our
              comprehensive consultation options below.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-16">
          <form
            className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Personal Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  Your Details
                </h2>
                <div>
                  <Label
                    htmlFor="name"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={`mt-1.5 focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`mt-1.5 focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className={`mt-1.5 focus:ring-2 focus:ring-blue-500 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    placeholder="0412 345 678 or +61 412 345 678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label
                      htmlFor="date"
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={today}
                      className={`mt-1.5 focus:ring-2 focus:ring-blue-500 ${
                        errors.date ? 'border-red-500' : ''
                      }`}
                      onKeyDown={(e) => {
                        // Prevent manual input of dates
                        e.preventDefault();
                      }}
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        if (isWeekend(input.value)) {
                          input.value = '';
                          setForm((prev) => ({ ...prev, date: '' }));
                          setErrors((prev) => ({
                            ...prev,
                            date: 'Weekends are not available for booking',
                          }));
                        }
                      }}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Note: Bookings are not available on weekends (Saturday and
                      Sunday)
                    </p>
                  </div>
                  <div className="flex-1">
                    <Label
                      htmlFor="time"
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <Clock className="w-4 h-4" />
                      Preferred Time
                    </Label>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className={`w-full mt-1.5 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.time ? 'border-red-500' : 'border-gray-300'
                      }`}
                      disabled={!form.date}
                    >
                      <option value="">Select a time</option>
                      {getAvailableTimeSlots().map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                    )}
                    {!form.date && !errors.time && (
                      <p className="text-sm text-gray-500 mt-1">
                        Please select a date first
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1.5 focus:ring-2 focus:ring-blue-500"
                    placeholder="Please provide any additional details about your legal matter..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Right Column - Consultation Options */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  Select Consultation Type
                </h2>
                <div className="space-y-4">
                  {OPTIONS.map((option) => (
                    <label
                      key={option.type}
                      className={`block border rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                        selected.type === option.type
                          ? 'border-blue-600 ring-2 ring-blue-200 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      } ${errors.consultationType ? 'border-red-500' : ''}`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value={option.type}
                        checked={selected.type === option.type}
                        onChange={() => setSelected(option)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-lg text-gray-900 flex items-center gap-2">
                          {option.name}
                          {selected.type === option.type && (
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div className="text-blue-600 font-bold">
                          AUD ${option.price}
                        </div>
                      </div>
                      <div className="text-gray-600 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {option.duration}
                      </div>
                      <div className="text-gray-500">{option.description}</div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {errors.general && (
              <div className="text-red-500 text-center mt-4">
                {errors.general}
              </div>
            )}

            <div className="pt-6 border-t border-gray-200">
              <Button
                type="button"
                className="max-w-md mx-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
                onClick={handleProceed}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    Proceed to Payment
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
