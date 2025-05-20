"use client";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingSuccess() {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();
  const REDIRECT_DELAY = 5000; // 5 seconds

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (sessionId) {
      fetch(`/api/retrieve-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => setSession(data));
    }
  }, []);

  useEffect(() => {
    if (session) {
      const timer = setTimeout(() => {
        router.push("/");
      }, REDIRECT_DELAY);
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">Booking Confirmed!</h1>
        {session ? (
          <>
            <p className="mb-2 text-gray-700">Thank you, <b>{session.metadata?.name}</b>!</p>
            <p className="mb-2 text-gray-700">
              Your consultation is booked for <b>{session.metadata?.date}</b> at <b>{session.metadata?.time}</b>.
            </p>
            <p className="mb-6 text-gray-700">
              A confirmation has been sent to <b>{session.customer_email}</b>.
            </p>
            <div className="mb-4 text-blue-500 text-sm">You will be redirected to the home page shortly…</div>
            <button
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition mb-2"
              onClick={() => router.push("/")}
            >
              Return to Home
            </button>
            <button
              className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold text-lg transition hover:bg-blue-50"
              onClick={() => router.push("/book-consultation")}
            >
              Book Another Consultation
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading your booking details…</p>
        )}
      </div>
    </div>
  );
} 