import { UserRole } from "@/lib/enums";

export interface PatientProfile {
  id: number;
  userId: number;
  dob: string;
  gender: UserRole;
  address: string;
  phone: string;
}