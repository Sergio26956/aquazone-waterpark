'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Parques Flotantes', href: '/parques/flotantes' },
  { label: 'Parques Urbanos', href: '/parques/urbanos' },
  { label: 'Atracciones', href: '/atracciones' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold text-blue-700">
          AQUAZONE
        </Link>
        <nav className="flex gap-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
