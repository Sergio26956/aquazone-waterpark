"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/piscinas", label: "Piscinas" },
  { href: "/playas", label: "Playas" },
  { href: "/kamikaze", label: "Kamikaze Jump" },
  { href: "/urbano", label: "Parque Urbano" },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6">
      {navItems.map((item) => (
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
