export type Role = 'admin' | 'doctor' | 'patient';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
}

export const mockUsers: User[] = [
    { id: 1, name: 'Her Admin', email: 'admin@mail.com', password: 'Admin123', role: 'admin' },
    { id: 2, name: 'Her Doctor', email: 'doctor@mail.com', password: 'Doctor123', role: 'doctor' },
    { id: 3, name: 'Her Patient', email: 'patient@mail.com', password: 'Patient123', role: 'patient' },
];