import { AppointmentProps } from "@/components/cards/AppointmentCard";
import { LabResultProps } from "@/components/cards/LabResultCard";

export const mockAppointments: AppointmentProps[] = [
    { id: 1, patient: 'John Doe', date: '2025-08-01', status: 'scheduled' },
    { id: 2, patient: 'Jane Doe', date: '2025-08-02', status: 'cancelled' },
    { id: 3, patient: 'Bob Smith', date: '2025-08-03', status: 'completed' },
];

export const mockLabResults: LabResultProps[] = [
    { id: 1, name: 'Hemoglobin', date: '2025-08-01', result: '12.5', normalRange: '10.0-15.0' },
    { id: 2, name: 'Creatinine', date: '2025-08-02', result: '1.2', normalRange: '0.6-1.2' },
    { id: 3, name: 'Fasting Glucose', date: '2025-08-03', result: '100', normalRange: '70-110' },
]