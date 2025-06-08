'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">AQUAZONE</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/parques/flotantes">Flotantes</Link>
          <Link href="/parques/urbanos">Urbanos</Link>
          <Link href="/galeria">Galería</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-white px-4 py-2">
          <Link href="/parques/flotantes">Flotantes</Link>
          <Link href="/parques/urbanos">Urbanos</Link>
          <Link href="/galeria">Galería</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
