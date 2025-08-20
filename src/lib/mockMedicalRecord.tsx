import { MedicalRecord } from "@/types/medicalRecord";

export const medicalRecords: MedicalRecord[] = [
    { 
        id: 1, 
        patientId: 1, 
        doctorId: 2, 
        visitDate: new Date("2025-08-01T09:00:00Z"), 
        diagnosis: "Flu", 
        notes: "Mild fever and cough" 
    },
];