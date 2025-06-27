'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function FlotantePage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <section className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
        >
          Parques Acuáticos Flotantes
        </motion.h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explora nuestros parques flotantes diseñados para piscinas y espacios naturales como lagos o playas.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Piscinas */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
        >
          <Link href="/categorias/flotante/piscinas">
            <Image 
              src="/images/flotante_categoria.png" 
              alt="Parque Flotante en Piscina"
              width={800}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Piscinas</h2>
              <p className="text-gray-700">
                Instalaciones flotantes ideales para piscinas municipales, hoteles y centros acuáticos.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Playas */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
        >
          <Link href="/categorias/flotante/playas">
            <Image 
              src="/images/flotante_categoria.png" 
              alt="Parque Flotante en Lago o Playa"
              width={800}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Playas</h2>
              <p className="text-gray-700">
                Parques modulares flotantes perfectos para entornos naturales como embalses o playas turísticas.
              </p>
            </div>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
