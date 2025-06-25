'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/fondo-aquazone.jpg"
          alt="Fondo AQUAZONE"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
      </motion.div>

      {/* Logo flotante animado */}
      <motion.div
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <Image
          src="/imagenes/logo.jpg"
          alt="Logo AQUAZONE"
          width={240}
          height={120}
          className="animate-pulse drop-shadow-xl"
        />
      </motion.div>

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Bienvenido a AQUAZONE Water Park
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Vive la experiencia más espectacular en parques acuáticos móviles y flotantes.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <Link
            href="/terrestres"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Parques Terrestres
          </Link>
          <Link
            href="/flotantes"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Parques Flotantes
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
