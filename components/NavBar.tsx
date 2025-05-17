"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">AQUAZONE</Link>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <span className="text-xl">☰</span>
        </button>
        <nav className={`md:flex gap-6 items-center ${open ? "block" : "hidden"}`}>
          <Link href="/#categorias">Categorías</Link>
          <Link href="/#galeria">Galería</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
