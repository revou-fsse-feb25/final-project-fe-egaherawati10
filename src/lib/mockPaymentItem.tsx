import { PaymentItem } from "@/types/paymentItem";

export const paymentItems: PaymentItem[] = [
    { 
        id: 1, 
        paymentId: 1, 
        description: "General Consultation", 
        amount: 150000, 
        serviceItemId: 1 
    },
    { 
        id: 2, 
        paymentId: 1, 
        description: "Paracetamol 500mg x10", 
        amount: 50000, 
        prescriptionId: 1 
    },
];