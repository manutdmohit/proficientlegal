"use client";
import { useEffect, useState } from "react";

export default function BookingSuccess() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (sessionId) {
      fetch(`/api/retrieve-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => setSession(data));
    }
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-20 bg-white p-8 rounded-xl shadow text-center">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Booking Confirmed!</h1>
      {session ? (
        <>
          <p className="mb-2">Thank you, <b>{session.metadata?.name}</b>!</p>
          <p className="mb-2">Your consultation is booked for <b>{session.metadata?.date}</b> at <b>{session.metadata?.time}</b>.</p>
          <p className="mb-2">A confirmation has been sent to <b>{session.customer_email}</b>.</p>
        </>
      ) : (
        <p>Loading your booking details…</p>
      )}
    </div>
  );
} 