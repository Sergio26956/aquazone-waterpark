"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Inicio" },
  { href: "/admin/galerias", label: "Galerías" },
  { href: "/admin/calendario", label: "Calendario" },
  { href: "/admin/usuarios", label: "Usuarios" },
];

export const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">AQUAZONE ADMIN</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-cyan-400 underline"
                    : "text-gray-300 hover:text-white"
                } transition`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
