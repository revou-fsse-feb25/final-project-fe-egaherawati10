import { Payment } from "@/types/payment";

export const payments: Payment[] = [
  {
    id: 1,
    patientId: 1,
    cashierId: 4,
    doctorId: 2,
    medicalRecordId: 1,
    totalAmount: 95000,
    paymentDate: new Date("2025-08-01T09:30:00Z"),
    method: "Cash",
    status: "pending",
  },
];