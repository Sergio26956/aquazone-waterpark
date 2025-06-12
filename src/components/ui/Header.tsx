'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Parques', href: '/parques' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AQUAZONE
        </Link>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-800 hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2 text-gray-800">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
