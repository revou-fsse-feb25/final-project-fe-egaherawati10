"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { menuItem } from "@/lib/menuItems";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-50 to-white text-green-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold tracking-wide">
            Her Hospital
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItem.map((menu) => (
              <Link
                key={menu.id}
                href={menu.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === menu.path
                    ? "bg-white text-green-900"
                    : "hover:bg-green-800 hover:text-white"
                }`}
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pt-2 pb-3 space-y-2">
          {menuItem.map((menu) => (
            <Link
              key={menu.id}
              href={menu.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === menu.path
                  ? "bg-white text-green-700"
                  : "hover:bg-green-500"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}