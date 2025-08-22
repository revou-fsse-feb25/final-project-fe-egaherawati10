// types.ts
export type Doctor = {
  id: number;
  name: string;
};

export type MedicalRecord = {
  id: number;
  patientId: number;
  patientName: string;
  doctorId: number;
  visitDate: Date;
  diagnosis: string;
  notes: string;
};