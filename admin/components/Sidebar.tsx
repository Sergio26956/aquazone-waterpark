"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Image, CalendarCheck, LogOut } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Panel", icon: LayoutDashboard },
    { href: "/admin/galeria", label: "Galería", icon: Image },
    { href: "/admin/calendario", label: "Calendario", icon: CalendarCheck },
  ];

  return (
    <aside className="h-full w-64 bg-zinc-900 text-white flex flex-col shadow-2xl">
      <div className="p-6 text-2xl font-bold text-center border-b border-zinc-700">
        ADMIN 2030
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition hover:bg-zinc-700",
              pathname === href && "bg-zinc-800"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-zinc-700 text-sm text-center opacity-50">
        <LogOut className="inline w-4 h-4 mr-1" />
        Cerrar sesión
      </div>
    </aside>
  );
}
