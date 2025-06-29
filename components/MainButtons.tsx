'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MainButtons() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/contact">
          <button className="px-6 py-3 bg-cyan-600 text-white rounded-2xl shadow-lg text-lg font-bold hover:bg-cyan-700 transition">
            Reserva Ahora
          </button>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/galeria">
          <button className="px-6 py-3 bg-white text-cyan-700 border-2 border-cyan-600 rounded-2xl shadow-md text-lg font-bold hover:bg-cyan-100 transition">
            Ver Galería
          </button>
        </Link>
      </motion.div>
    </div>
  )
}
