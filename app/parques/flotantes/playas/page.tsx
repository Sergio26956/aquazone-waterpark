'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FlotantesPlayasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-cyan-300 flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 text-center"
      >
        Parques Flotantes en Playas
      </motion.h1>

      <Image
        src="/images/flotante-playa.jpg"
        alt="Parque Acuático Flotante en Playa"
        width={800}
        height={400}
        className="rounded-3xl shadow-xl mb-6"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl max-w-3xl text-center text-blue-800"
      >
        Instalaciones acuáticas modulares diseñadas para playas, pensadas para garantizar la máxima diversión con seguridad, innovación y un diseño espectacular. Ideales para zonas turísticas que buscan una atracción estacional de alto impacto.
      </motion.p>
    </main>
  )
}
