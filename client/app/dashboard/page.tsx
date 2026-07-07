"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      router.push("/login");

      return;

    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {

      setUser(JSON.parse(storedUser));

    }

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    router.push("/login");

  };

  return (

    <main className="min-h-screen bg-slate-100 p-10">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">

            Welcome {user?.name} 👋

          </h1>

          <p className="text-gray-600 mt-2">
            Ready for your next adventure?
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

       <div
  onClick={() => router.push("/planner")}
  className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:scale-105 transition"
>
  🤖 AI Trip Planner
</div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          💰 Budget Planner
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          🎒 Packing Assistant
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          🌦 Weather
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          📍 Hidden Gems
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          🎤 AI Voice Assistant
        </div>

      </div>

    </main>

  );

}