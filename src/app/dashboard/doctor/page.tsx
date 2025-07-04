import { AppointmentCard } from "@/components/cards/AppointmentCard";
import { mockAppointments } from "@/lib/mockDashboard";

export const metadata = { title: 'Doctor Dashboard' };

export default function DoctorDashboard() {
    const todaysAppointments = mockAppointments;

    return (
        <main className="space-y-6 p-8">
            <h1 className="text-3xl font-semibold">Doctor Dashboard</h1>

            <section>
                <h2 className="text-xl font-medium mb-2">Today's Appointment</h2>
                <div className="space-y-3">
                    {todaysAppointments.map((a) => (
                        <AppointmentCard key={a.id} appt={a} /> 
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <button className="bg-green-100 border-green-950 text-green-900 rounded-md">Emergency Department</button>
                <button className="bg-green-100 border-green-950 text-green-900 rounded-md">Polyclinics</button>
                <button className="bg-green-100 border-green-950 text-green-900 rounded-md">Laboratory</button>
                <button className="bg-green-100 border-green-950 text-green-900 rounded-md">Pharmacy</button>
                <button className="bg-green-100 border-green-950 text-green-900 rounded-md">Billing</button>
            </section>
        </main>
    );
}