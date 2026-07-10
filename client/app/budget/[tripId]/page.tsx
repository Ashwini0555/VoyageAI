"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { createBudget, getBudget } from "@/services/budgetApi";

export default function BudgetPage() {
  const params = useParams();
  const tripId = params.tripId as string;

  const [budget, setBudget] = useState({
    flight: 0,
    hotel: 0,
    food: 0,
    transport: 0,
    activities: 0,
    shopping: 0,
    miscellaneous: 0,
  });

  useEffect(() => {
    if (tripId) {
      loadBudget();
    }
  }, [tripId]);

  const loadBudget = async () => {
    try {
      const data = await getBudget(tripId);

      if (data.budget) {
        setBudget({
          flight: data.budget.flight,
          hotel: data.budget.hotel,
          food: data.budget.food,
          transport: data.budget.transport,
          activities: data.budget.activities,
          shopping: data.budget.shopping,
          miscellaneous: data.budget.miscellaneous,
        });
      }
    } catch (error) {
      console.log("No previous budget found.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget({
      ...budget,
      [e.target.name]: Number(e.target.value),
    });
  };

  const saveBudget = async () => {
    try {
      await createBudget({
        trip: tripId,
        ...budget,
      });

      alert("Budget saved successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to save budget.");
    }
  };

  const total =
    budget.flight +
    budget.hotel +
    budget.food +
    budget.transport +
    budget.activities +
    budget.shopping +
    budget.miscellaneous;

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center">
          Budget Planner
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Estimate your travel expenses.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <Input
            label="Flight"
            name="flight"
            value={budget.flight}
            onChange={handleChange}
          />

          <Input
            label="Hotel"
            name="hotel"
            value={budget.hotel}
            onChange={handleChange}
          />

          <Input
            label="Food"
            name="food"
            value={budget.food}
            onChange={handleChange}
          />

          <Input
            label="Transport"
            name="transport"
            value={budget.transport}
            onChange={handleChange}
          />

          <Input
            label="Activities"
            name="activities"
            value={budget.activities}
            onChange={handleChange}
          />

          <Input
            label="Shopping"
            name="shopping"
            value={budget.shopping}
            onChange={handleChange}
          />

          <Input
            label="Miscellaneous"
            name="miscellaneous"
            value={budget.miscellaneous}
            onChange={handleChange}
          />

        </div>

        <div className="mt-10 bg-blue-600 text-white rounded-2xl p-8 text-center">

          <h2 className="text-3xl font-bold">
            Total Budget
          </h2>

          <p className="text-5xl mt-4 font-bold">
            ₹ {total.toLocaleString()}
          </p>

        </div>

        <div className="mt-8 text-center">
          <button
            onClick={saveBudget}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
          >
            Save Budget
          </button>
        </div>

      </div>
    </main>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block font-semibold mb-2">
        {label}
      </label>

      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-xl p-3"
      />
    </div>
  );
}