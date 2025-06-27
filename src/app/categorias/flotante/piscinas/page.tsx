'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PiscinasPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
      >
        Parques Flotantes en Piscinas
      </motion.h1>

      <section className="max-w-5xl mx-auto">
        <Image 
          src="/images/flotante_piscina.jpg" 
          alt="Piscina flotante" 
          width={1200}
          height={700}
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-gray-700 text-lg">
          Ideales para instalaciones temporales o permanentes en piscinas, nuestros parques flotantes ofrecen diversión segura y adaptabilidad para todo tipo de eventos y edades.
        </p>
      </section>
    </main>
  )
}
