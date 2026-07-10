"use client";

import { useState } from "react";
import { generateFoodGuide } from "@/services/foodGuideApi";

export default function FoodGuidePage() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [cuisine, setCuisine] = useState("");

  const [cafes, setCafes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!destination || !budget || !cuisine) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateFoodGuide({
        destination,
        budget: Number(budget),
        cuisine,
      });

      setCafes(data.cafes);

    } catch (error) {
      console.error(error);
      alert("Failed to generate cafe suggestions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-center">
          AI Food Guide
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Discover cafes that match your budget and cuisine.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
            className="border rounded-xl p-3"
          />

          <select
            value={cuisine}
            onChange={(e) =>
              setCuisine(e.target.value)
            }
            className="border rounded-xl p-3"
          >
            <option value="">Cuisine</option>
            <option>Indian</option>
            <option>Italian</option>
            <option>Chinese</option>
            <option>Continental</option>
            <option>Cafe</option>
          </select>

        </div>

        <div className="text-center mt-8">

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading
              ? "Finding Cafes..."
              : "Find Cafes"}
          </button>

        </div>

        {cafes.length > 0 && (

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {cafes.map((cafe, index) => (

              <div
                key={index}
                className="bg-slate-50 rounded-2xl shadow p-6"
              >

               <h2 className="text-2xl font-bold">
  {cafe.name}
</h2>

<p className="mt-2 text-gray-600">
  {cafe.address}
</p>

<p className="mt-4">
  {cafe.description}
</p>

<p className="mt-2 text-green-700 font-medium">
  {cafe.reason}
</p>

<button
  onClick={() =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        cafe.name + " " + cafe.address
      )}`,
      "_blank"
    )
  }
  className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
>
  Reserve Now
</button>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}