"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function TabsNav({ id }: { id: number }) {
  const segment = useSelectedLayoutSegment(); // 'services' | 'pharmacy' | 'billing' | null

  const tab = (slug: string, label: string) => {
    const active = segment === slug;
    return (
      <Link
        href={`/patient/${id}/${slug}`}
        className={`px-4 py-2 font-medium border-b-2 ${
          active
            ? "border-green-900 text-green-900"
            : "border-transparent text-gray-500 hover:text-green-900"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="flex space-x-2 border-b border-gray-200">
      {tab("services", "Services")}
      {tab("pharmacy", "Pharmacy")}
      {tab("billing", "Billing")}
    </div>
  );
}