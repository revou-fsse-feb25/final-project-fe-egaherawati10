// ===== ENUMS =====
export enum UserRole {
  admin = "admin",
  doctor = "doctor",
  pharmacist = "pharmacist",
  cashier = "cashier",
  patient = "patient",
  registration_clerk = "registration_clerk",
}

export enum UserStatus {
  active = "active",
  suspended = "suspended",
}

export enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

// ===== MODELS =====
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  status?: UserStatus;
}

export interface PatientProfile {
  id: number;
  userId: number;
  dob: string;        // keep as string in mock data for simplicity
  gender: Gender;
  address: string;
  phone: string;
}

export interface MedicalRecord {
  id: number;
  patientId: number;   // refers to PatientProfile.id
  doctorId: number;    // refers to User.id (doctor)
  visitDate: Date;
  diagnosis: string;
  notes?: string;
}