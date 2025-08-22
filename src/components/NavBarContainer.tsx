"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { useMe } from "@/app/hook/useMe";
import NavBarUI from "./NavBarUI";
import { toast } from "react-toastify";

export default function NavbarContainer() {
  const router = useRouter();
  const { me, isLoading, refresh } = useMe();

  async function handleLogout() {
    try {
      await logout();
      await refresh(); // clears cached /me
      toast.success("Logged out successfully");
      router.push("/auth/login");
    } catch (e) {
      console.error(e);
      toast.error("Logout failed. Please try again.");
    }
  }

  return (
    <NavBarUI
      user={isLoading ? null : me}
      onLogout={handleLogout}
    />
  );
}