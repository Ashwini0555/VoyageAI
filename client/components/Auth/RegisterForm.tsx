"use client";

import { useState } from "react";
import api from "@/services/api";

export default function RegisterForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    preferredBudget: "",
    favouriteDestination: "",
    travelStyle: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await api.post("/auth/register", formData);

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      password: "",
      preferredBudget: "",
      favouriteDestination: "",
      travelStyle: "",
    });

  } catch (error: any) {
    alert(
      error.response?.data?.message || "Registration Failed"
    );
  }
};
  return (

    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Join VoyageAI and start planning smarter.
      </p>

<form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          name="preferredBudget"
          placeholder="Preferred Budget"
          value={formData.preferredBudget}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          name="favouriteDestination"
          placeholder="Favourite Destination"
          value={formData.favouriteDestination}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <select
          name="travelStyle"
          value={formData.travelStyle}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        >
          <option value="">Travel Style</option>
          <option value="Solo">Solo</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Couple">Couple</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Create Account
        </button>

      </form>

    </div>

  );

}