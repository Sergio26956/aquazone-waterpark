import Link from "next/link";

export default function AdminNav() {
  return (
    <nav className="bg-gray-100 p-4 space-x-4">
      <Link href="/admin/gestion-contenido" className="text-blue-600 hover:underline">Contenido</Link>
      <Link href="/admin/usuarios" className="text-blue-600 hover:underline">Usuarios</Link>
      <Link href="/admin/campañas" className="text-blue-600 hover:underline">Campañas</Link>
    </nav>
  );
}
