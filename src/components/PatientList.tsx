import { medicalRecords, users, patientProfiles } from "@/lib/mockPatients";
import Link from "next/link";

export default function PatientList() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Patient List</h2>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-green-900 text-white">
          <tr>
            <th className="px-3 py-2 border">No</th>
            <th className="px-3 py-2 border">MRId</th>
            <th className="px-3 py-2 border">Patient</th>
            <th className="px-3 py-2 border">Doctor</th>
            <th className="px-3 py-2 border">Visit Date</th>
          </tr>
        </thead>
        <tbody>
          {medicalRecords.map((record, index) => {
            const patient = patientProfiles.find((p) => p.id === record.patientId);
            const user = users.find((u) => u.id === patient?.userId);
            const doctor = users.find((u) => u.id === record.doctorId);

            return (
              <tr key={record.id} className="hover:bg-gray-100">
                <td className="px-3 py-2 border text-center">{index + 1}</td>
                <td className="px-3 py-2 border">HC-{record.patientId}</td>
                <td className="px-3 py-2 border text-green-900 font-medium">
                  <Link href={`/patient/${record.patientId}`} className="hover:underline">
                    {user?.name}
                  </Link>
                </td>
                <td className="px-3 py-2 border">{doctor?.name}</td>
                <td className="px-3 py-2 border">
                  {record.visitDate.toLocaleDateString("en-GB")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}