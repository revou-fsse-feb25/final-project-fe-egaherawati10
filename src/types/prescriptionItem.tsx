export interface PrescriptionItem {
  id: number;
  prescriptionId: number;
  medicineId: number;
  dosage: string;
  quantity: number;
  instructions?: string;
}