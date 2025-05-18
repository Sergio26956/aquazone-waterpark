"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Parques Flotantes", href: "/categorias/flotantes" },
  { label: "Parques Urbanos", href: "/categorias/urbanos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AQUAZONE
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-4 py-2 border-t">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2 text-gray-700 hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
