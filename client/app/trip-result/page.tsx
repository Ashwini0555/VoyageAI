"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function TripResultPage() {

  const [trip, setTrip] = useState("");

  useEffect(() => {

    const saved = localStorage.getItem("trip");

    if (saved) {

      const data = JSON.parse(saved);

      setTrip(data.itinerary);

    }

  }, []);

  return (

    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">

          🌍 Your AI Trip

        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-10">

          <ReactMarkdown>

            {trip}

          </ReactMarkdown>

        </div>

      </div>

    </main>

  );

}