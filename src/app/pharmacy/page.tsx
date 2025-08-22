"use client";
import { useEMRStore } from "@/lib/store";

export default function PharmacyPage({ params }: { params: { id: string } }) {
  const pid = Number(params.id);
  const { prescriptions, addPrescription } = useEMRStore();

  const patientPrescriptions = prescriptions.filter((p) => p.patientId === pid);

  return (
    <div>
      <h2 className="text-lg font-semibold text-green-900 mb-4">Pharmacy</h2>
      <button
        className="bg-green-900 text-white px-4 py-2 rounded"
        onClick={() =>
          addPrescription({
            id: Date.now(),
            patientId: pid,
            medicines: ["Amoxicillin 500mg"],
          })
        }
      >
        + Add Prescription
      </button>
      <ul className="mt-4 space-y-2">
        {patientPrescriptions.map((p) => (
          <li key={p.id} className="border p-2 rounded">
            Medicines: {p.medicines.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}