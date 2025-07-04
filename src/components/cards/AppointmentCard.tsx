'use client';

export interface AppointmentProps {
    id: number;
    patient: string;
    date: string;
    status: 'scheduled' | 'completed' | 'cancelled';
}

export function AppointmentCard({ appt }: { appt: AppointmentProps }) {
    return (
        <div>
            <div>
                <h3>{appt.patient}</h3>
                <p>
                    {new Date(appt.date).toLocaleDateString()}
                </p>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${
                appt.status === 'scheduled' 
                ? 'bg-green-100 text-green-900'
                : appt.status === 'completed'
                ? 'bg-green-100 text-green-900'
                : 'bg-red-100 text-red-900'
            }`}>
                {appt.status}
            </span>
        </div>
    );
}