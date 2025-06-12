import Link from 'next/link';

const items = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Campañas', href: '/admin/campanas' },
  { label: 'Medios', href: '/admin/medios' },
  { label: 'Usuarios', href: '/admin/usuarios' },
  { label: 'Editor IA', href: '/admin/ia' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Admin</h2>
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
