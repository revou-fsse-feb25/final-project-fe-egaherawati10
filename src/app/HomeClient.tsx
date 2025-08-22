"use client";

import Navbar from "@/components/NavBar";
import { menuItem } from "@/lib/menuItems";
import Link from "next/link";

export default function HomeClient() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="sticky top-0">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4 text-green-900">
          Welcome to Her Hospital
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Your health is our priority. We provide trusted care with modern
          facilities.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-12">
        <h3 className="text-2xl font-semibold text-center mb-8 text-green-900">
          Our Services
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          {menuItem.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition block"
            >
              <h4 className="font-bold text-lg mb-2">{item.name}</h4>
              <p className="text-gray-600">
                Access {item.name.toLowerCase()} features quickly.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-12 max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8 text-green-900">
          Our Doctors
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Dr. Sarah Johnson", "Dr. Michael Smith", "Dr. Emily Brown"].map(
            (doc) => (
              <div
                key={doc}
                className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition"
              >
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold">{doc}</h4>
                <p className="text-gray-600">Specialist</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-green-700 text-white py-12 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-1">Jl. Sehat No. 123, Jakarta</p>
        <p className="mb-1">(021) 123-4567</p>
        <p>contact@herhospital.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white text-center py-4">
        © {new Date().getFullYear()} Her Hospital. All Rights Reserved.
      </footer>
    </div>
  );
}