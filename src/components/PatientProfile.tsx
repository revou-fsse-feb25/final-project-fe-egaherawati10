import { patientProfiles } from "@/lib/mockPatientProfile";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { prescriptions } from "@/lib/mockPrescription";
import { prescriptionItems } from "@/lib/mockPrescriptionItem";

export default function PatientProfile() {
  const patient = mockPatientWithUser[0];
  const patientProfile = patientProfiles.find((p) => p.id === patient.id);

  // Get all prescriptions for this patient
  const patientPrescriptions = prescriptions.filter(
    (p) => p.patientId === patient.id
  );

  // Take the latest prescription
  const latestPrescription = patientPrescriptions[0];
  
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
          </div>
        </section>
    </div>
  );
}