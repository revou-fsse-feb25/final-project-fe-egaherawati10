export interface MedicalRecord {
  id: number;
  patientId: number;
  doctorId: number;
  visitDate: Date;
  diagnosis: string;
  notes?: string;
}