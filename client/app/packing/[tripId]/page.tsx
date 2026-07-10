"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  getPacking,
  generatePacking,
  savePacking,
} from "@/services/packingApi";

export default function PackingPage() {
  const params = useParams();
  const tripId = params.tripId as string;

  const [items, setItems] = useState<
    {
      name: string;
      packed: boolean;
    }[]
  >([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tripId) {
      loadPacking();
    }
  }, [tripId]);

  const loadPacking = async () => {
    try {
      const data = await getPacking(tripId);

      if (data.packing) {
        setItems(data.packing.items);
      }
    } catch (error) {
      console.log("No packing list found.");
    }
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const data = await generatePacking(tripId);

      setItems(data.packing.items);

      alert("AI Packing List Generated");
    } catch (error) {
      console.error(error);
      alert("Failed to generate packing list.");
    } finally {
      setLoading(false);
    }
  };

  const toggleItem = (index: number) => {
    const updated = [...items];

    updated[index].packed = !updated[index].packed;

    setItems(updated);
  };

  const handleSave = async () => {
    try {
      await savePacking(
  tripId,
  items
);

      alert("Packing Progress Saved");
    } catch (error) {
      console.error(error);
      alert("Failed to save packing list.");
    }
  };

  const packedCount = items.filter(
    (item) => item.packed
  ).length;

  return (
    <main className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-center">
          AI Packing Assistant
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Generate a smart packing checklist based on your trip.
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl disabled:bg-gray-400"
          >
            {loading
              ? "Generating..."
              : "Generate AI Packing List"}
          </button>

          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
          >
            Save Progress
          </button>

        </div>

        {items.length > 0 && (

          <>

            <div className="mt-10 space-y-4">

              {items.map((item, index) => (

                <label
                  key={index}
                  className="flex items-center gap-4 border rounded-xl p-4 hover:bg-gray-50 cursor-pointer"
                >

                  <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={() => toggleItem(index)}
                    className="w-5 h-5"
                  />

                  <span
                    className={`text-lg ${
                      item.packed
                        ? "line-through text-gray-400"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>

                </label>

              ))}

            </div>

            <div className="mt-10 bg-blue-600 text-white rounded-2xl p-8 text-center">

              <h2 className="text-3xl font-bold">
                Progress
              </h2>

              <p className="text-5xl mt-4 font-bold">
                {packedCount} / {items.length}
              </p>

              <p className="mt-2">
                Items Packed
              </p>

            </div>

          </>

        )}

      </div>

    </main>
  );
}