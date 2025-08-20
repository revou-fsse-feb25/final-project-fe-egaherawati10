'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import { Profile } from "@/lib/profileTypes";

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");                                       
      return;
    }

    setProfile(JSON.parse(storedUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!profile) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div>
        <ProfileCard profile={profile} />
        <button
          onClick={handleLogout}
          className="mt-6 bg-green-950 text-white hover:bg-green-800 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </main>
  );
}