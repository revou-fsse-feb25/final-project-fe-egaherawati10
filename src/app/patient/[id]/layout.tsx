import Link from "next/link";
import { notFound } from "next/navigation";
import { mockPatientWithUser } from "@/lib/mockPatientWithUser";
import { patientProfiles } from "@/lib/mockPatientProfile";
import TabsNav from "./tabs-nav";

export default function PatientLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const pid = Number(params.id);

  const patient = mockPatientWithUser.find((p) => p.id === pid);
  if (!patient) return notFound();

  const profile = patientProfiles.find((pp) => pp.id === pid);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-green-900 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">💚 Her Hospital</h1>
          <p className="text-sm text-gray-200">Patient Visit Workflow</p>
        </div>
      </header>

      {/* Patient Info */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
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
              <p className="font-medium">PT-{String(patient.id).padStart(6, "0")}</p>
            </div>
            <div>
              <p className="text-gray-500">Gender</p>
              <p className="font-medium">{profile?.gender}</p>
            </div>
            <div>
              <p className="text-gray-500">Date of Birth</p>
              <p className="font-medium">
                {profile?.dob ? new Date(profile.dob).toLocaleDateString() : "-"}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">{profile?.phone}</p>
            </div>
            <div>
              <p className="text-gray-500">Address</p>
              <p className="font-medium">{profile?.address}</p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <TabsNav id={pid} />

        {/* Tab content */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          {children}
        </section>
      </main>
    </div>
  );
}