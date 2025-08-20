"use client";

import { medicines } from "@/lib/mockMedicine";
import { prescriptionItems } from "@/lib/mockPrescriptionItem";
import { PrescriptionItem } from "@/types/prescriptionItem";

interface PharmacySummaryProps {
  prescriptionId: PrescriptionItem["prescriptionId"];
}

export default function PharmacySummary({ prescriptionId }: PharmacySummaryProps) {
  if (!prescriptionId) {
    return (
      <section className="bg-white p-6 rounded-xl shadow-md border">
        <h2 className="text-lg font-semibold text-green-900 mb-4">
          Prescription Details
        </h2>
        <p className="text-gray-600 text-sm">No prescription found.</p>
      </section>
    );
  }

  // Find related items
  const relatedItems = prescriptionItems.filter(
    (item) => item.prescriptionId === prescriptionId
  );

  const total = relatedItems.reduce((acc, item) => {
    const med = medicines.find((m) => m.id === item.medicineId);
    return acc + (med?.price ?? 0) * item.quantity;
  }, 0);

  return (
    <section className="bg-white p-6 rounded-xl shadow-md border">
      <h2 className="text-lg font-semibold text-green-900 mb-4">
        Prescription Details
      </h2>
      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border">Medicine</th>
            <th className="text-left p-2 border">Dosage</th>
            <th className="text-left p-2 border">Quantity</th>
            <th className="text-right p-2 border">Price (Rp)</th>
            <th className="text-right p-2 border">Subtotal (Rp)</th>
          </tr>
        </thead>
        <tbody>
          {relatedItems.map((item) => {
            const med = medicines.find((m) => m.id === item.medicineId);
            const subtotal = (med?.price ?? 0) * item.quantity;
            return (
              <tr key={item.id}>
                <td className="p-2 border">{med?.name}</td>
                <td className="p-2 border">{item.dosage}</td>
                <td className="p-2 border">{item.quantity}</td>
                <td className="p-2 border text-right">
                  {med?.price.toLocaleString("id-ID")}
                </td>
                <td className="p-2 border text-right">
                  {subtotal.toLocaleString("id-ID")}
                </td>
              </tr>
            );
          })}
          <tr className="font-bold bg-gray-50">
            <td className="p-2 border text-right" colSpan={4}>
              Total
            </td>
            <td className="p-2 border text-right">
              Rp {total.toLocaleString("id-ID")}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}