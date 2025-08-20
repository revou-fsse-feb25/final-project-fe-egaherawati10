import { patientProfiles } from "@/lib/mockPatientProfile";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { payments } from "@/lib/mockPayment";

export default function PatientPayment() {
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
                {patientProfile?.dob
                  ? new Date(patientProfile.dob).toLocaleDateString()
                  : "-"}
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
              <p className="text-gray-500">Last Payment</p>
              <p className="font-medium">
                {latestPayment
                  ? new Date(latestPayment.paymentDate).toLocaleDateString()
                  : "-"}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Payment Status</p>
              <p className="font-medium capitalize">
                {latestPayment?.status ?? "-"}
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}