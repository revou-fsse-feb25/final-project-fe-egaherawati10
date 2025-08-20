"use client";

import { useState } from "react";

export default function RecordForm() {
  const [form, setForm] = useState({
    subjective: "",
    objective: "",
    assessment: "",
    plan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Record Note Saved:", form);
  };

  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold text-green-900 mb-6 text-center">
        SOAP Note
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subjective */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Subjective (Patient’s Complaints & History)
          </label>
          <textarea
            name="subjective"
            value={form.subjective}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="E.g. Patient complains of headache since yesterday..."
          />
        </div>

        {/* Objective */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Objective (Examination Findings)
          </label>
          <textarea
            name="objective"
            value={form.objective}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="E.g. Blood pressure: 120/80, Temperature: 37.5°C..."
          />
        </div>

        {/* Assessment */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Assessment (Diagnosis / Impression)
          </label>
          <textarea
            name="assessment"
            value={form.assessment}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="E.g. Tension headache, rule out migraine..."
          />
        </div>

        {/* Plan */}
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Plan (Treatment / Follow-up)
          </label>
          <textarea
            name="plan"
            value={form.plan}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-900 focus:outline-none"
            placeholder="E.g. Prescribed paracetamol, follow-up in 3 days..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-900 text-white py-2 rounded-xl hover:bg-green-800 transition-colors"
        >
          Save SOAP Note
        </button>
      </form>
    </div>
  );
}