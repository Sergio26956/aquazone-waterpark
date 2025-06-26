'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function MainButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 px-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Link href="/parques-acuaticos/flotantes">
          <span className="flex items-center gap-2 font-bold text-lg">
            <Sparkles size={20} /> Parques Flotantes
          </span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Link href="/parques-acuaticos/urbanos">
          <span className="flex items-center gap-2 font-bold text-lg">
            <Sparkles size={20} /> Parques Urbanos
          </span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Link href="/contacto">
          <span className="flex items-center gap-2 font-bold text-lg">
            <Sparkles size={20} /> Contacto
          </span>
        </Link>
      </motion.div>
    </div>
  )
}
