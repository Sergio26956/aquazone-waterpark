'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/usuarios', label: 'Usuarios' },
    { href: '/admin/calendario', label: 'Calendario' },
    { href: '/admin/configuracion', label: 'Configuración' },
  ];

  return (
    <aside className="bg-blue-800 text-white w-64 min-h-screen p-4 space-y-2">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'block px-4 py-2 rounded hover:bg-blue-700 transition',
            pathname === href && 'bg-blue-700 font-bold'
          )}
        >
          {label}
        </Link>
      ))}
    </aside>
  );
}
