import ProfileCard from "@/components/ProfileCard";
import { Profile } from "@/lib/profileTypes";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`, {
        cache: 'no-store',
    });
    
    if (res.status === 401) {
        redirect('/login');
    }

    if (!res.ok) {
        throw new Error('Unable to fetch data');
    }
    

    const profile = (await res.json()) as Profile;

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 border-y-green-950 p-8">
            <ProfileCard profile={profile} />
        </main>
    )
}