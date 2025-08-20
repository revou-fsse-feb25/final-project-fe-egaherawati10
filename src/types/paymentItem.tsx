export interface PaymentItem {
  id: number;
  paymentId: number;
  description: string;
  amount: number;
  prescriptionId?: number;
  serviceItemId?: number;
}