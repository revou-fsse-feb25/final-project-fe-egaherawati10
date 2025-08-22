import { Gender, UserRole } from "@/types/enums";

// Mock Users (patients + doctors)
export const users = [
  {
    id: 1,
    name: "Dr. John Smith",
    username: "drjohn",
    email: "drjohn@example.com",
    role: UserRole.doctor,
  },
  {
    id: 2,
    name: "Dr. Alice Johnson",
    username: "dralice",
    email: "dralice@example.com",
    role: UserRole.doctor,
  },
  {
    id: 3,
    name: "Aqeel Dzikra",
    username: "aqeel",
    email: "aqeel@example.com",
    role: UserRole.patient,
  },
  {
    id: 4,
    name: "Yaumil Khairiah",
    username: "yaumil",
    email: "yaumil@example.com",
    role: UserRole.patient,
  },
  {
    id: 5,
    name: "Budi Santoso",
    username: "budi",
    email: "budi@example.com",
    role: UserRole.patient,
  },
  {
    id: 6,
    name: "Siti Aisyah",
    username: "siti",
    email: "siti@example.com",
    role: UserRole.patient,
  },
  {
    id: 7,
    name: "Andi Wijaya",
    username: "andi",
    email: "andi@example.com",
    role: UserRole.patient,
  },
];

// Mock PatientProfiles
export const patientProfiles = [
  {
    id: 101,
    userId: 3,
    dob: "1990-05-15",
    gender: Gender.male,
    address: "Jakarta",
    phone: "0812345671",
  },
  {
    id: 102,
    userId: 4,
    dob: "1992-08-20",
    gender: Gender.female,
    address: "Bandung",
    phone: "0812345672",
  },
  {
    id: 103,
    userId: 5,
    dob: "1985-11-10",
    gender: Gender.male,
    address: "Surabaya",
    phone: "0812345673",
  },
  {
    id: 104,
    userId: 6,
    dob: "1993-02-25",
    gender: Gender.female,
    address: "Medan",
    phone: "0812345674",
  },
  {
    id: 105,
    userId: 7,
    dob: "1988-07-30",
    gender: Gender.male,
    address: "Semarang",
    phone: "0812345675",
  },
];

// Mock MedicalRecords (one visit each)
export const medicalRecords = [
  {
    id: 201,
    patientId: 101,
    doctorId: 1,
    visitDate: new Date("2025-08-01T09:00:00Z"),
    diagnosis: "Flu",
    notes: "Mild fever and cough",
  },
  {
    id: 202,
    patientId: 102,
    doctorId: 1,
    visitDate: new Date("2025-08-02T14:30:00Z"),
    diagnosis: "Pregnancy Check",
    notes: "Stable condition",
  },
  {
    id: 203,
    patientId: 103,
    doctorId: 2,
    visitDate: new Date("2025-08-03T10:15:00Z"),
    diagnosis: "Hypertension",
    notes: "BP 150/95 mmHg",
  },
  {
    id: 204,
    patientId: 104,
    doctorId: 1,
    visitDate: new Date("2025-08-04T11:45:00Z"),
    diagnosis: "Diabetes",
    notes: "High blood sugar",
  },
  {
    id: 205,
    patientId: 105,
    doctorId: 2,
    visitDate: new Date("2025-08-05T08:20:00Z"),
    diagnosis: "Asthma",
    notes: "Breathing difficulty",
  },
];