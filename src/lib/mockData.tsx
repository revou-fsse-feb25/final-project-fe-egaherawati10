import { Doctor, MedicalRecord } from "../types/mockData";

export const doctors: Doctor[] = [
  { id: 1, name: "dr. John Smith" },
  { id: 2, name: "dr. Alice Johnson" },
  { id: 3, name: "dr. Ega Herawati" },
  { id: 4, name: "dr. Michael Tan" },
  { id: 5, name: "dr. Sarah Lee" },
];

export const medicalRecords: MedicalRecord[] = [
  {
    id: 1,
    patientId: 101,
    patientName: "Aqeel Dzikra",
    doctorId: 3,
    visitDate: new Date("2025-08-01T09:00:00Z"),
    diagnosis: "Flu",
    notes: "Mild fever and cough",
  },
  {
    id: 2,
    patientId: 102,
    patientName: "Yaumil Khairiah",
    doctorId: 3,
    visitDate: new Date("2025-08-02T14:30:00Z"),
    diagnosis: "Pregnancy Check",
    notes: "2nd trimester, stable condition",
  },
  {
    id: 3,
    patientId: 103,
    patientName: "Budi Santoso",
    doctorId: 1,
    visitDate: new Date("2025-08-03T10:15:00Z"),
    diagnosis: "Hypertension",
    notes: "Blood pressure 150/95 mmHg",
  },
  {
    id: 4,
    patientId: 104,
    patientName: "Siti Aisyah",
    doctorId: 2,
    visitDate: new Date("2025-08-04T11:45:00Z"),
    diagnosis: "Diabetes",
    notes: "Blood sugar slightly high",
  },
  {
    id: 5,
    patientId: 105,
    patientName: "Andi Wijaya",
    doctorId: 5,
    visitDate: new Date("2025-08-05T08:20:00Z"),
    diagnosis: "Asthma",
    notes: "Breathing difficulty at night",
  },
];