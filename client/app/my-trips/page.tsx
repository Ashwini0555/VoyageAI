"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getMyTrips, deleteTrip } from "@/services/tripApi";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";

export default function MyTripsPage() {
  const [trips, setTrips] = useState<any[]>([]);

  const loadTrips = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      const data = await getMyTrips(user._id);

      setTrips(data.trips);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTrips();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this trip?");

    if (!confirmDelete) return;

    try {
      await deleteTrip(id);

      loadTrips();
    } catch (error) {
      console.error(error);
      alert("Failed to delete trip.");
    }
  };

  return (
    <ProtectedRoute>
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
           My Trips
        </h1>

        {trips.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No Trips Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Generate your first AI trip.
            </p>

            <Link
              href="/planner"
              className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl"
            >
              Plan Trip
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">

            {trips.map((trip) => (

              <div
                key={trip._id}
                className="bg-white rounded-3xl shadow-xl p-8"
              >

                <h2 className="text-3xl font-bold mb-6">
                   {trip.destination}
                </h2>

                <div className="space-y-2 text-lg">

                  <p>
                     <strong>Budget:</strong> {trip.budget}
                  </p>

                  <p>
                     <strong>Days:</strong> {trip.days}
                  </p>

                  <p>
                     <strong>Style:</strong> {trip.travelStyle}
                  </p>

                  <p>
                     <strong>Travelers:</strong> {trip.travelers}
                  </p>

                  <p>
                     <strong>Interests:</strong>{" "}
                    {trip.interests.join(", ")}
                  </p>

                </div>

               <div className="grid grid-cols-3 gap-4 mt-8">

  <Link
    href={`/trip-result?id=${trip._id}`}
    className="bg-blue-600 text-white py-3 rounded-xl text-center hover:bg-blue-700 transition"
  >
    View
  </Link>

  <Link
    href={`/budget/${trip._id}`}
    className="bg-green-600 text-white py-3 rounded-xl text-center hover:bg-green-700 transition"
  >
    Budget
  </Link>

  <button
    onClick={() => handleDelete(trip._id)}
    className="bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
  >
    Delete
  </button>

</div>

              </div>

            ))}

          </div>
        )}

      </div>
    </main>
    </ProtectedRoute>
  );
}