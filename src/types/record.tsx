export interface Record {
  id: number;
  patientId: number;
  doctorId: number;
  subjective: string;
  objective: string;
  assessment: string;
  planning: string;
  createdAt: Date;
  updatedAt: Date;
}