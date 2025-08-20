import { Prescription } from "@/types/prescription";

export const prescriptions: Prescription[] = [
    {
        id: 1,
        medicalRecordId: 1,
        doctorId: 2,
        pharmacistId: 3,
        patientId: 1,
        dateIssued: new Date("2025-08-01T08:40:00Z"),
        notes: "Take with food",
        price: 40000.00,
        createdAt: new Date("2025-08-01T08:45:00Z"),
        updatedAt: new Date("2025-08-01T08:50:00Z"),
    },
];