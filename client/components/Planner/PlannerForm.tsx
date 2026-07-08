"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateTrip } from "@/services/plannerApi";

import DestinationInput from "./DestinationInput";
import BudgetSelect from "./BudgetSelect";
import DaysInput from "./DaysInput";
import TravelStyle from "./TravelStyle";
import TravelersInput from "./TravelersInput";
import DateInput from "./DateInput";
import Interests from "./Interests";
import GenerateButton from "./GenerateButton";

export default function PlannerForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    days: 1,
    travelStyle: "",
    travelers: 1,
    startDate: "",
    interests: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(
          (item) => item !== interest
        ),
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      });
    }
  };

  const handleGenerate = async () => {
    try {
      const result = await generateTrip(formData);

      localStorage.setItem("trip", JSON.stringify(result));

      router.push("/trip-result");
    } catch (error) {
      console.error(error);
      alert("Failed to generate trip.");
    }
  };

  return (
    <div className="mt-12 bg-white rounded-3xl shadow-xl p-10">
      <h2 className="text-3xl font-bold">
        Trip Details
      </h2>

      <p className="text-gray-500 mb-10">
        Fill in your trip information.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <DestinationInput
          value={formData.destination}
          onChange={handleChange}
        />

        <BudgetSelect
          value={formData.budget}
          onChange={handleChange}
        />

        <DaysInput
          value={formData.days}
          onChange={handleChange}
        />

        <TravelStyle
          value={formData.travelStyle}
          onChange={handleChange}
        />

        <TravelersInput
          value={formData.travelers}
          onChange={handleChange}
        />

        <DateInput
          value={formData.startDate}
          onChange={handleChange}
        />

        <Interests
          selected={formData.interests}
          toggleInterest={toggleInterest}
        />

      </div>

      <div className="mt-10">
        <GenerateButton
          onClick={handleGenerate}
        />
      </div>
    </div>
  );
}