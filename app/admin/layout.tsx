import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-950 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Panel Admin</h2>
        <nav className="space-y-2">
          <Link href="/admin/dashboard" className="block">Dashboard</Link>
          <Link href="/admin/eventos" className="block">Eventos</Link>
          <Link href="/admin/usuarios" className="block">Usuarios</Link>
          <Link href="/admin/calendario" className="block">Calendario</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
    </div>
  );
}
