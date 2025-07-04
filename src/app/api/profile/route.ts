import { Profile } from "@/lib/profileTypes";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";

const mockProfiles: Record<string, Profile> = {
    'admin@mail.com': { 
        id: 1, 
        name: 'Her Admin', 
        email: 'admin@mail.com', 
        role: 'admin' 
    },
    'doctor@mail.com': { 
        id: 2, 
        name: 'Her Doctor', 
        email: 'doctor@mail.com', 
        role: 'doctor',
        specialty: 'General',
        licenseNumber: '123456789',
        dob: '1999-09-09'
    },
    'patient@mail.com': { 
        id: 3, 
        name: 'Her Patient', 
        email: 'patient@mail.com', 
        role: 'patient',
        dob: '1999-09-09',
        allergies: ['Penicillin'],
        previousHistory: [''],
        currentMedications: ['Paracetamol', 'Ambroxol', 'Vitamin C'],
        bloodType: 'A',
        height: 160,
        weight: 55
    },
};

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if(!session?.user?.email) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const profile = mockProfiles[session.user.email];

    if(!profile) {
        return NextResponse.json({ message: 'Profile not found' }, { status: 404 });
    }

    return NextResponse.json(profile);
}