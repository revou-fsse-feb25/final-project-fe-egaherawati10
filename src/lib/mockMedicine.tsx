import { Medicine } from "@/types/medicine";

export const medicines: Medicine[] = [
    { 
        id: 1, 
        name: "Paracetamol", 
        dosage: "500mg", 
        type: "Tablet", 
        manufacturer: "HerPharma Ltd", 
        stock: 200, 
        price: 5000 
    },
    { 
        id: 2, 
        name: "Amoxicillin", 
        dosage: "250mg", 
        type: "Capsule", 
        manufacturer: "MediCure", 
        stock: 150, 
        price: 8000 
    },
];