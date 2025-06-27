'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function UrbanoMovil() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
      >
        Parque Acuático Urbano Móvil
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5].map((n) => (
          <motion.div 
            key={n}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
          >
            <Image 
              src={`/images/urbano_movil_${n}.jpg`}
              alt={`Atracción ${n}`}
              width={800}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-800 mb-2">Atracción {n}</h2>
              <p className="text-gray-700">
                Descripción detallada de la atracción {n}, ideal para todas las edades y entornos urbanos.
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
