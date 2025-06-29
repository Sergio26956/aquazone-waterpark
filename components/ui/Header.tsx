'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur bg-black/30 text-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <Link href="/">AQUAZONE</Link>
        </motion.div>
        <div className="space-x-6 text-lg font-medium hidden md:flex">
          <Link href="/parques/flotantes" className="hover:text-cyan-400 transition">Flotantes</Link>
          <Link href="/parques/terrestres" className="hover:text-cyan-400 transition">Terrestres</Link>
          <Link href="/contacto" className="hover:text-cyan-400 transition">Contacto</Link>
        </div>
      </nav>
    </header>
  )
}
