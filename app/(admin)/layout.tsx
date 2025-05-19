import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Panel Admin</h1>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</Link>
          <Link href="/admin/usuarios" className="text-gray-700 hover:text-blue-600 font-medium">Usuarios</Link>
          <Link href="/admin/calendario" className="text-gray-700 hover:text-blue-600 font-medium">Calendario</Link>
          <Link href="/admin/ajustes" className="text-gray-700 hover:text-blue-600 font-medium">Ajustes</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
