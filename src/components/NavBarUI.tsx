"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, LogOut, User as UserIcon } from "lucide-react";

type User = {
  name: string;           // e.g. "dr. EGA HERAWATI"
  role: string;           // e.g. "DOKTER"
};

type NavbarProps = {
  user?: User | null;
  onLogout?: () => Promise<void> | void; // wire to your logout action
};

export default function NavBarUI({ user, onLogout }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Esc
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-green-50 to-white text-green-900 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo only */}
          <Link href="/" className="flex items-center gap-3 font-bold tracking-wide">
            {/* Optional logo image; replace src as needed */}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-white">
              HH
            </span>
            <span className="hidden sm:inline text-xl">Her Hospital</span>
          </Link>

          {/* Right: User area */}
          <div className="flex items-center gap-3">
            {/* Notification bell with badge (static 3 as placeholder) */}
            <button
              className="relative rounded-full p-2 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute -right-0 -top-0 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-semibold text-white">
                3
              </span>
            </button>

            {/* If not signed in, show Sign in */}
            {!user ? (
              <Link
                href="/login"
                className="rounded-md bg-green-700 px-3 py-2 text-sm font-medium text-white hover:bg-green-800"
              >
                Sign in
              </Link>
            ) : (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center gap-3 rounded-md px-2 py-1.5 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-haspopup="menu"
                  aria-expanded={open}
                >
                  {/* Name + role */}
                  <div className="hidden text-left sm:block leading-tight">
                    <div className="text-sm font-semibold truncate max-w-[180px]">
                      {user.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-wide text-green-700">
                      {user.role}
                    </div>
                  </div>
                  <ChevronDown size={16} className="hidden sm:block" />
                </button>

                {/* Dropdown */}
                {open && (
                  <div
                    role="menu"
                    className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-green-100 bg-white shadow-lg"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-green-50"
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      <UserIcon size={16} /> Profile
                    </Link>

                    <button
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-green-50"
                      role="menuitem"
                      onClick={async () => {
                        setOpen(false);
                        try {
                          await onLogout?.();
                        } catch {
                          // optionally toast an error
                        }
                      }}
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}