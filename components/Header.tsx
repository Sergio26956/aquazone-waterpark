'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [scrolling, setScrolling] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolling ? 'bg-black/80 backdrop-blur shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="text-cyan-400 text-xl font-bold tracking-wide">
          AQUAZONE
        </Link>

        <nav className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <Link href="/flotantes" className="hover:text-cyan-400">Parques Flotantes</Link>
          <Link href="/terrestres/urbano" className="hover:text-cyan-400">Parques Urbanos</Link>
          <Link href="/contacto" className="hover:text-cyan-400">Contacto</Link>
        </nav>

        <div className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden fixed top-16 left-0 right-0 bg-black/90 text-white p-6 z-40 space-y-4 text-center"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/flotantes" onClick={() => setMenuOpen(false)}>Parques Flotantes</Link>
          <Link href="/terrestres/urbano" onClick={() => setMenuOpen(false)}>Parques Urbanos</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </motion.div>
      )}

      {/* Botón flotante contacto */}
      <a
        href="/contacto"
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-full text-sm font-bold shadow-lg z-40 transition"
      >
        Contactar
      </a>
    </>
  )
}
