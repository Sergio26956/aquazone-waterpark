"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  Image as ImageIcon,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Calendario", href: "/admin/calendario", icon: Calendar },
  { name: "Contrataciones", href: "/admin/contrataciones", icon: FolderKanban },
  { name: "Galería", href: "/admin/galeria", icon: ImageIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-6 font-bold text-2xl tracking-tight text-white text-center">
        AQUAZONE 2030
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-zinc-800",
                {
                  "bg-zinc-800 text-cyan-400 font-semibold shadow-md":
                    isActive,
                  "text-zinc-300": !isActive,
                }
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-6">
        <button
          onClick={() => alert("Cerrar sesión (pendiente implementación)")}
          className="flex items-center gap-3 w-full p-3 text-left text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg text-red-400"
        >
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
