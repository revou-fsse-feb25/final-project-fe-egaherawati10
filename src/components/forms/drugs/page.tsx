"use client";

import { useState } from "react";

export default function DrugsListForm() {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    type: "",
    manufacturer: "",
    stock: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Drug Added:", form);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-900 mb-6 text-center">
        Add Drug
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Drug Name */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Drug Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter drug name"
          />
        </div>

        {/* Dosage */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Dosage
          </label>
          <input
            type="text"
            name="dosage"
            value={form.dosage}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="e.g. 500mg"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Type
          </label>
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="e.g. injection"
          />
        </div>

        {/* Manufacturer */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Manufacturer
          </label>
          <input
            type="text"
            name="manufacturer"
            value={form.manufacturer}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter manufacturer"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Stock Quantity
          </label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="e.g. $10,00"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-800 transition-colors"
        >
          Add Drug
        </button>
      </form>
    </div>
  );
}