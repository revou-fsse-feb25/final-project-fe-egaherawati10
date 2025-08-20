'use client';

import { Profile } from "@/lib/profileTypes";

export default function ProfileCard({ profile }: { profile: Profile}) {
    return (
        <div className="w-full max-w-lg p-6 rounded-lg bg-gray-100 shadow-md space-y-2">
            <h1 className="text-2xl font-semibold text-green-950">{profile.name}</h1>
            <p className="text-sm text-gray-950"><strong>Email:</strong> {profile.email}</p>

            {profile.role === 'admin' && (
                <p><strong>Role:</strong> {profile.role}</p>
            )}

            {profile.role === 'doctor' && (
                <>
                <p><strong>Specialty:</strong> {profile.specialty}</p>
                <p><strong>License Number:</strong> {profile.licenseNumber}</p>
                <p><strong>DOB:</strong></p>
                </>
            )}

            {profile.role === 'patient' && (
                <>
                <p><strong>DOB:</strong> {profile.dob}</p>
                <p><strong>Allergies:</strong> {profile.allergies?.join(', ') || 'None'}</p>
                <p><strong>Previous History:</strong> {profile.previousHistory?.join(', ') || 'None'}</p>
                <p><strong>Current Medications:</strong> {profile.currentMedications?.join(', ') || 'None'}</p>
                <p><strong>Blood Type:</strong> {profile.bloodType}</p>
                <p><strong>Height:</strong> {profile.height}</p>
                <p><strong>Weight:</strong> {profile.weight}</p>
                </>
            )}
        </div>
    );
}