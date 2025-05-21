"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { name: "Usuarios", href: "/(admin)/users" },
  { name: "Mensajes", href: "/(admin)/messages" },
  { name: "Contenido", href: "/(admin)/content" },
  { name: "Ajustes", href: "/(admin)/settings" },
]

const AdminSidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="bg-slate-800 text-white w-64 min-h-screen p-4 space-y-4">
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "block px-3 py-2 rounded hover:bg-slate-700 transition",
              pathname === link.href && "bg-slate-700 font-bold"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default AdminSidebar
