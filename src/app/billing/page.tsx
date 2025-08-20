"use client";

import Navbar from "@/components/NavBar";
import PatientPayment from "@/components/PatientPayment";
import PaymentDetails from "@/components/PaymentDetails";
import PaymentMethod from "@/components/PaymentMethod";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { payments } from "@/lib/mockPayment";
import { paymentItems } from "@/lib/mockPaymentItem";

export default function BillingPage() {
  const patient = mockPatientWithUser[0];
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Patient Info */}
        <section>
          <PatientPayment />
        </section>

        {/* Payment Items Table */}
        <section>
          <PaymentDetails
            patientId={patient.id}
            payments={payments}
            paymentItems={paymentItems}
          />
        </section>

        {/* Payment Method */}
        <section>
          <PaymentMethod />
        </section>
      </main>
    </div>
  );
}