import { User } from "@/types/user";
import { UserRole, UserStatus } from "./enums";

export const mockUsers: User[] = [
    { 
        id: 1, 
        name: "Admin User", 
        username: "admin", 
        email: "admin@herhospital.com", 
        password: "hashedpw", 
        role: "admin", 
        status: "active" 
    },
    { 
        id: 2, 
        name: "Dr. Smith", 
        username: "drsmith", 
        email: "drsmith@herhospital.com", 
        password: "hashedpw", 
        role: "doctor", 
        status: "active" 
    },
    { 
        id: 3, 
        name: "Pharma Lee", 
        username: "pharma", 
        email: "pharma@herhospital.com", 
        password: "hashedpw", 
        role: "pharmacist", 
        status: "active" 
    },
    { 
        id: 4, 
        name: "Cashier Kim", 
        username: "cashier", 
        email: "cashier@herhospital.com", 
        password: "hashedpw", 
        role: "cashier", 
        status: "active" 
    },
    { 
        id: 5, 
        name: "John Doe", 
        username: "johndoe", 
        email: "john@patient.com", 
        password: "hashedpw", 
        role: "patient", 
        status: "active" 
    }
];