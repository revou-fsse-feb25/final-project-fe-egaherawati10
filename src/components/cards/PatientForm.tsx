"use client";

import { useState } from "react";

export default function PatientRegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Patient Registered:", form);
    // You can replace this with an API call
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-900 mb-6 text-center">
        Patient Registration
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter full name"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter age"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Gender
          </label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="e.g. +62 812 3456 7890"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter address"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-800 transition-colors"
        >
          Register Patient
        </button>
      </form>
    </div>
  );
}