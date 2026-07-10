"use client";

import PlannerForm from "@/components/Planner/PlannerForm";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";

export default function PlannerPage() {
  return (
    <ProtectedRoute>
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-blue-700">
            🌍 AI Trip Planner
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Plan your dream vacation in seconds with AI.
          </p>

        </div>

        <PlannerForm />

      </div>
    </main>
    </ProtectedRoute>
  );
}