"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Images, CalendarDays, LogOut } from "lucide-react";

const navItems = [
  { name: "Panel", href: "/admin", icon: LayoutDashboard },
  { name: "Galería", href: "/admin/galeria", icon: Images },
  { name: "Eventos", href: "/admin/eventos", icon: CalendarDays },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800">
      <div className="text-center py-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-wider text-cyan-400">AQUAZONE</h1>
        <p className="text-xs text-zinc-500">Zona Administrativa</p>
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all",
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-zinc-300 hover:bg-zinc-800"
              )}
            >
              <Icon size={18} />
              {name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4">
        <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-400 transition">
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
