"use client";

import Link from "next/link";
import { Payment } from "@/types/payment";
import { PaymentItem } from "@/types/paymentItem";

interface PaymentDetailsProps {
  patientId: number;
  payments: Payment[];
  paymentItems: PaymentItem[];
}

export default function PaymentDetails({ patientId, payments, paymentItems }: PaymentDetailsProps) {
  const patientPayments = payments.filter((p) => p.patientId === patientId);

  const latestPayment = patientPayments.sort(
    (a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime()
  )[0];

  const relatedItems = paymentItems.filter((item) => item.paymentId === latestPayment?.id);

  const serviceItems = relatedItems.filter((i) => i.serviceItemId);
  const prescriptionItems = relatedItems.filter((i) => i.prescriptionId);

  return (
    <section className="bg-white p-6 rounded-xl shadow-md border">
      <h2 className="text-lg font-semibold text-green-900 mb-4">
        Payment Details
      </h2>

      {/* Service Items */}
      {serviceItems.length > 0 && (
        <>
          <h3 className="text-md font-medium mb-2 text-gray-700">Services</h3>
          <table className="w-full text-sm border mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border">Description</th>
                <th className="text-right p-2 border">Amount (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {serviceItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 border">
                    <Link
                      href={`/services/${item.serviceItemId}`}
                      className="text-green-700 hover:underline"
                    >
                      {item.description}
                    </Link>
                  </td>
                  <td className="p-2 border text-right">
                    {item.amount.toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Prescription Items */}
      {prescriptionItems.length > 0 && (
        <>
          <h3 className="text-md font-medium mb-2 text-gray-700">Prescriptions</h3>
          <table className="w-full text-sm border mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border">Description</th>
                <th className="text-right p-2 border">Amount (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {prescriptionItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 border">
                    <Link
                      href={`/pharmacy/${item.prescriptionId}`}
                      className="text-green-700 hover:underline"
                    >
                      {item.description}
                    </Link>
                  </td>
                  <td className="p-2 border text-right">
                    {item.amount.toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Total */}
      <div className="flex justify-between border-t pt-3 mt-4 font-bold">
        <span>Total</span>
        <span>
          Rp {latestPayment?.totalAmount.toLocaleString("id-ID")}
        </span>
      </div>
    </section>
  );
}