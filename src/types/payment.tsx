import { PaymentStatus } from "@/lib/enums";

export interface Payment {
  id: number;
  patientId: number;
  cashierId: number;
  doctorId?: number;
  medicalRecordId?: number;
  totalAmount: number;
  paymentDate: Date;
  method: string;
  status: PaymentStatus;
}