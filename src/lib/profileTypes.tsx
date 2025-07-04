export type Role = 'admin' | 'doctor' | 'patient';

export interface BaseProfile {
    id: number;
    name: string;
    email: string;
    role: Role;
}

export interface PatientProfile extends BaseProfile {
    role: 'patient';
    dob: string;
    allergies: string[] | null;
    previousHistory: string[] | null;
    currentMedications: string[] | null;
    bloodType: string | null;
    height: number;
    weight: number;
}

export interface DoctorProfile extends BaseProfile {
    role: 'doctor';
    specialty: string;
    licenseNumber: string;
    dob: string;
}

export interface AdminProfile extends BaseProfile {
    role: 'admin';
}

export type Profile = PatientProfile | DoctorProfile | AdminProfile;