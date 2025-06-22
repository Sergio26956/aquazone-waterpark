'use client'

import Link from 'next/link'

export const Header = () => (
  <header className="w-full px-6 py-4 bg-white shadow-md z-50 fixed top-0 left-0 flex justify-between items-center">
    <Link href="/" className="text-xl font-bold text-blue-600">AQUAZONE</Link>
    <nav className="space-x-6 text-sm md:text-base">
      <Link href="/flotantes">Flotantes</Link>
      <Link href="/terrestres">Terrestres</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  </header>
)
