import { StatCard } from "@/components/cards/StatCards";

const stats = [
    { label: 'Patients', value: '162' },
    { label: 'Doctors', value: '5' },
    { label: 'Appointments', value: '20' },
];

export const metadata = { title: 'Admin Dashboard' };

export default function AdminDashboard() {
    return (
        <main className="space-y-6 p-8">
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>

            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                    <StatCard key={s.label} label={s.label} value={s.value} />
                ))}
            </section>

            <section className="mt-8">
                <h2 className="text-xl font-medium md-2">System Notices</h2>
                <div className="bg-white shadow rounded-md p-4">
                    <p className="text-sm text-green-900">
                        No critical alerts. All services running normaly.
                    </p>
                </div>
            </section>
        </main>
    )
}