'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
      
      {/* Fondo Video o Imagen Fija (ya cargado por CSS en page.tsx) */}

      {/* Capa Oscura Superpuesta */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenido */}
      <motion.div
        className="z-20 text-center px-4 max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
        >
          Bienvenidos a Aquazone Waterpark
        </motion.h1>

        <p className="text-lg md:text-xl text-white/90 mb-6">
          Vive la experiencia acuática más increíble del verano.
        </p>

        <div className="flex justify-center space-x-6">
          <Link href="/flotantes">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Parques Flotantes
            </motion.button>
          </Link>

          <Link href="/terrestres">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Parques Terrestres
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
