"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const adminNavItems = [
  { href: "/admin", label: "Panel" },
  { href: "/admin/reservas", label: "Reservas" },
  { href: "/admin/calendario", label: "Calendario" },
  { href: "/admin/media", label: "Medios" },
]

export default function AdminNavbar() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-4 border-b p-4">
      {adminNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
