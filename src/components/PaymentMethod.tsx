import { patientProfiles } from "@/lib/mockPatientProfile";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { payments } from "@/lib/mockPayment";

export default function PaymentMethod() {
  const patient = mockPatientWithUser[0];
  const patientProfile = patientProfiles.find((p) => p.id === patient.id);

  // Get all payments for this patient
  const patientPayments = payments.filter((p) => p.patientId === patient.id);

  // Take the latest payment (assume ordered by paymentDate descending)
  const latestPayment = patientPayments.sort(
    (a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime()
  )[0];
  
  return (
    <div>
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Payment Method
          </h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                defaultChecked={latestPayment?.method === "Cash"}
              />
              <span>Cash</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="card"
                defaultChecked={latestPayment?.method === "Card"}
              />
              <span>Credit/Debit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="insurance"
                defaultChecked={latestPayment?.method === "Insurance"}
              />
              <span>Insurance</span>
            </label>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 shadow-md">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
  );
}