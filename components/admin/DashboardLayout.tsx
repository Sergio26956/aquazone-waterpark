import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      <aside className="w-full bg-[#121212] px-6 py-4 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold">AQUAZONE Panel</h1>
        <nav className="mt-2 flex gap-4">
          <Link href="/dashboard">Inicio</Link>
          <Link href="/dashboard/calendario">Calendario</Link>
          <Link href="/logout" className="ml-auto text-red-400">Cerrar sesión</Link>
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
