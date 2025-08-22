"use client";
import { useEMRStore } from "@/lib/store";

export default function BillingPage({ params }: { params: { id: string } }) {
  const pid = Number(params.id);
  const { payments, addPayment } = useEMRStore();

  const patientPayments = payments.filter((p) => p.patientId === pid);

  return (
    <div>
      <h2 className="text-lg font-semibold text-green-900 mb-4">Billing</h2>
      <button
        className="bg-green-900 text-white px-4 py-2 rounded"
        onClick={() =>
          addPayment({
            id: Date.now(),
            patientId: pid,
            totalAmount: 200_000,
            method: "cash",
          })
        }
      >
        + Add Payment
      </button>
      <ul className="mt-4 space-y-2">
        {patientPayments.map((pay) => (
          <li key={pay.id} className="border p-2 rounded">
            Rp {pay.totalAmount.toLocaleString()} – {pay.method}
          </li>
        ))}
      </ul>
    </div>
  );
}