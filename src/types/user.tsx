import { UserRole, UserStatus } from "@/lib/enums";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
}