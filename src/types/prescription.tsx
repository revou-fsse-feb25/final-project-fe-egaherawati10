export interface Prescription {
  id: number;
  medicalRecordId: number;
  doctorId: number;
  pharmacistId?: number;
  patientId: number;
  dateIssued: Date;
  notes?: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}