import { LabResultCard } from "@/components/cards/LabResultCard";
import { mockLabResults } from "@/lib/mockDashboard";

export const metadata = { title: 'My Health Record' };

export default function PatientDashboard() {
    const recentResults = mockLabResults;

    return (
        <main className="space-y-6 p-8">
            <h1 className="text-3xl font-semibold">My Health Record</h1>

            <section>
                <h2 className="text-xl font-medium md-2">Recent Lab Results</h2>
                <div className="space-y-3">
                    {recentResults.map((r) => (
                        <LabResultCard key={r.id} res={r} />
                    ))}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-medium md-2">Medications</h2>
                <ul className="list-disc list-inside bg-green-100 rounded-md p-4 shadow">
                    <li>Paracetamol 500 mg - 3 times a day</li>
                    <li>Ambroxol 30 mg - 3 times a day</li>
                    <li>Vitamin C 500 mg - in the afternoon</li>
                </ul>
            </section>
        </main>
    )
}