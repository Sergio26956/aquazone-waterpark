'use client';

import { usePathname } from 'next/navigation';

export default function AdminHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold">Panel de Administración</h1>
      <p className="text-sm opacity-80">{pathname}</p>
    </header>
  );
}
