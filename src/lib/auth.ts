import { apiFetch } from "../lib/api";

export type Me = {
  id: number;
  name: string;
  role: string;
  avatarUrl?: string | null;
};

export function getMe() {
  return apiFetch<Me>("/auth/profile"); // GET http://localhost:3000/api/auth/profile
}

export function logout() {
  // Your Nest route can be POST /auth/logout that clears the refresh token cookie / server session
  return apiFetch("/auth/logout", { method: "POST" });
}