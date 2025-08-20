"use client";

import { useState } from "react";

export default function ExaminationsListForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Examination Added:", form);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-900 mb-6 text-center">
        Add Examination
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Examination Name */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Examination Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter examination name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter examination details"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter price"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Duration (minutes)
          </label>
          <input
            type="number"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="e.g. 30"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-800 transition-colors"
        >
          Add Examination
        </button>
      </form>
    </div>
  );
}