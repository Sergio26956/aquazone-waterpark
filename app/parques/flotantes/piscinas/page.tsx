'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PiscinasPage() {
  return (
    <motion.div
      className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-800 mb-6 text-center"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Parques Acuáticos Flotantes - Piscinas
      </motion.h1>

      <motion.p
        className="max-w-3xl text-center text-lg md:text-xl text-blue-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Atracciones acuáticas flotantes adaptadas a piscinas. Diversión segura, modular y adaptable a cualquier espacio acuático.
      </motion.p>

      <motion.div
        className="w-full max-w-4xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Image
          src="/images/piscinas.jpg"
          alt="Parques Acuáticos Flotantes en Piscinas"
          width={1200}
          height={700}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>
    </motion.div>
  )
}
