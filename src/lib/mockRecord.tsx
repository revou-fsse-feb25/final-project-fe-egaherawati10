import { Record } from "@/types/record";

export const records: Record[] = [
    {
        id: 1,
        patientId: 1,
        doctorId: 2,
        subjective: "Headache and fatigue",
        objective: "BP normal, temperature slightly elevated",
        assessment: "Likely viral infection",
        planning: "Rest, hydration, paracetamol as needed",
        createdAt: new Date("2025-08-01T08:00:00Z"),
        updatedAt: new Date("2025-08-01T08:30:00Z"),
    },
];