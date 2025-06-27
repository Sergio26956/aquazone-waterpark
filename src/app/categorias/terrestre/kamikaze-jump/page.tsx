'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function KamikazeJump() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-red-700 text-center mb-8"
      >
        Kamikaze Jump
      </motion.h1>

      <section className="max-w-5xl mx-auto">
        <Image 
          src="/images/kamikaze_detalle.jpg" 
          alt="Kamikaze Jump Detalle" 
          width={1200}
          height={700}
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-gray-700 text-lg">
          Kamikaze Jump es una atracción de caída libre y deslizamientos extremos para los más atrevidos.
          Altura, velocidad y emoción se combinan en esta instalación de alto impacto visual y sensorial.
        </p>
      </section>
    </main>
  )
}
