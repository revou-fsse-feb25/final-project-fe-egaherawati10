"use client";

import PharmacyTable from "@/components/DrugTable";
import Navbar from "@/components/NavBar";
import PharmacySummary from "@/components/PharmacySummary";
import { medicines } from "@/lib/mockMedicine";
import { patientProfiles } from "@/lib/mockPatientProfile";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { prescriptions } from "@/lib/mockPrescription";
import { prescriptionItems } from "@/lib/mockPrescriptionItem";

export default function PharmacyPage() {
  const patient = mockPatientWithUser[0];
  const patientProfile = patientProfiles.find((p) => p.id === patient.id);

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
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Patient Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">{patient.user.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Patient ID</p>
              <p className="font-medium">
                PT-{String(patient.id).padStart(6, "0")}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Gender</p>
              <p className="font-medium">{patientProfile?.gender}</p>
            </div>
            <div>
              <p className="text-gray-500">Date of Birth</p>
              <p className="font-medium">
                {new Date(patientProfile?.dob ?? "").toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">{patientProfile?.phone}</p>
            </div>
            <div>
              <p className="text-gray-500">Address</p>
              <p className="font-medium">{patientProfile?.address}</p>
            </div>
            <div>
              <p className="text-gray-500">Latest Prescription</p>
              <p className="font-medium">
                {latestPrescription
                  ? new Date(latestPrescription.createdAt).toLocaleDateString()
                  : "-"}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Prescribing Doctor</p>
              <p className="font-medium">Dr. Smith</p>
            </div>
          </div>
        </section>

        {/* Prescription Items */}
        <section>
          <PharmacyTable />
        </section>

        {/* Prescription Summary */}
        <section>
          <PharmacySummary prescriptionId={latestPrescription?.id} />
        </section>

        {/* Action */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Pharmacy Action
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Please confirm the prescription has been dispensed to the patient.
          </p>
          <div className="flex justify-end">
            <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 shadow-md">
              Confirm Dispense
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}