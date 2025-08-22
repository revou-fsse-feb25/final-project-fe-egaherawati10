import { create } from "zustand";

type Service = {
  id: number;
  patientId: number;
  name: string;
  status: "planned" | "in_progress" | "completed";
};

type Prescription = {
  id: number;
  patientId: number;
  medicines: string[];
};

type Payment = {
  id: number;
  patientId: number;
  totalAmount: number;
  method: "cash" | "card" | "insurance" | "transfer";
};

type Record = {
  id: number;
  patientId: number;
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
};

type Store = {
  records: Record[];
  services: Service[];
  prescriptions: Prescription[];
  payments: Payment[];
  addRecord: (r: Record) => void;
  addService: (s: Service) => void;
  addPrescription: (p: Prescription) => void;
  addPayment: (pay: Payment) => void;
};

export const useEMRStore = create<Store>((set) => ({
  records: [],
  services: [],
  prescriptions: [],
  payments: [],
  addRecord: (r) => set((state) => ({ records: [...state.records, r] })),
  addService: (s) => set((state) => ({ services: [...state.services, s] })),
  addPrescription: (p) => set((state) => ({ prescriptions: [...state.prescriptions, p] })),
  addPayment: (pay) => set((state) => ({ payments: [...state.payments, pay] })),
}));