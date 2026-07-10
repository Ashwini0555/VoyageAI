"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";

export default function DashboardPage() {
  const [user, setUser] = useState<any>({});

useEffect(() => {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);

  const cards = [
    {
      title: "AI Planner",
      icon: "✈️",
      link: "/planner",
      color: "bg-blue-500",
    },
    {
      title: "My Trips",
      icon: "🧳",
      link: "/my-trips",
      color: "bg-green-500",
    },
    {
      title: "Budget Planner",
      icon: "💰",
      link: "#",
      color: "bg-yellow-500",
    },
    {
      title: "Packing Assistant",
      icon: "🎒",
      link: "#",
      color: "bg-purple-500",
    },
    {
      title: "Maps & Weather",
      icon: "🌦️",
      link: "#",
      color: "bg-cyan-500",
    },
    {
      title: "Voice Assistant",
      icon: "🎤",
      link: "#",
      color: "bg-pink-500",
    },
  ];

  return (
     <ProtectedRoute>
    <main className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-5xl font-bold">
          Welcome back, {user.name} 👋
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Plan your next adventure with AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {cards.map((card) => (

            <Link
              key={card.title}
              href={card.link}
            >

              <div className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105 duration-300 cursor-pointer">

                <div
                  className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white`}
                >
                  {card.icon}
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  {card.title}
                </h2>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
    </ProtectedRoute>
  );
}