"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Parques Acuáticos", href: "#categorias" },
  { name: "Galería", href: "/galeria" },
  { name: "Contacto", href: "/contacto" },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-sm font-medium transition-colors ${
            pathname === item.href
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
