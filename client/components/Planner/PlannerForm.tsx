"use client";

import { useState, useEffect } from "react";
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

  // Debug: See formData whenever it changes
  useEffect(() => {
    console.log("Current formData:", formData);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleGenerate = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      console.log("Sending Data:", {
        ...formData,
        user: user._id,
      });

      const result = await generateTrip({
        ...formData,
        user: user._id,
      });

      localStorage.setItem("trip", JSON.stringify(result));

      router.push("/trip-result");
    } catch (error) {
      console.error(error);
      alert("Failed to generate trip.");
    }
  };

  return (
    <div className="mt-12 bg-white rounded-3xl shadow-xl p-10">
      <h2 className="text-3xl font-bold">Trip Details</h2>

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