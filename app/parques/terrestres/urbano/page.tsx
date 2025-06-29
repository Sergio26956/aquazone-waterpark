'use client'
import { motion } from 'framer-motion'

export default function Urbano() {
  return (
    <main className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-4xl font-bold text-green-700 mb-6"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Parque Acuático Urbano Móvil
      </motion.h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Instalaciones hinchables con piscinas móviles para eventos temporales en calles, plazas y ferias.
      </p>
      <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center text-gray-500">
        Imagen o video aquí
      </div>
    </main>
  )
}
