"use client";

import Navbar from "@/components/NavBar";
import PatientProfile from "@/components/PatientProfile";
import PharmacySummary from "@/components/PharmacySummary";
import RecordForm from "@/components/RecordForm";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { prescriptions } from "@/lib/mockPrescription";
import { prescriptionItems } from "@/lib/mockPrescriptionItem";

export default function PolyclinicPage() {
  const patient = mockPatientWithUser[0];

  const patientPrescriptions = prescriptions.filter(
    (p) => p.patientId === patient.id
  );

  const latestPrescription = patientPrescriptions[0];

  const relatedItems = prescriptionItems.filter(
    (item) => item.prescriptionId === latestPrescription?.id
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Patient Info */}
        <section >
          <PatientProfile />
        </section>

        {/* Record (SOAP) Form */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <RecordForm />
        </section>

      </main>
    </div>
  );
}