'use client';

export interface MenuProps {
  id: number;
  name: string;
  path: string;
}

export function MenuCard({ menu }: { menu: MenuProps }) {
  return (
    <div className="flex flex-col bg-white rounded-md p-4 shadow-md hover:bg-whitesmoke">
      <span className="text-sm text-green-950">{menu.name}</span>
      <span className="text-2xl font-semibold">{menu.path}</span>
    </div>
  );
}