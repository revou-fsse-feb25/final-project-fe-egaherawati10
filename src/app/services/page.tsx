"use client";

import Navbar from "@/components/NavBar";
import PatientProfile from "@/components/PatientProfile";
import ServiceTable from "@/components/ServiceTable";
import { patientProfiles } from "@/lib/mockPatientProfile";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";

export default function ServicePage() {
  const patient = mockPatientWithUser[0];
  const patientProfile = patientProfiles.find((p) => p.id === patient.id);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-white text-gray-900">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Patient Info */}
        <section>
          <PatientProfile />
        </section>

        {/* Services Table */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Service Transactions
          </h2>
          <ServiceTable />
        </section>

        {/* Action */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Service Action
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Please confirm the services have been provided to the patient.
          </p>
          <div className="flex justify-end">
            <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 shadow-md">
              Confirm Services
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}