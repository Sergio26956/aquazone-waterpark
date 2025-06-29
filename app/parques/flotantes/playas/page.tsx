'use client'
import { motion } from 'framer-motion'

export default function Playas() {
  return (
    <main className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-4xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Parque Acuático Flotante: Playas
      </motion.h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        Atracciones acuáticas hinchables diseñadas para playas con máxima seguridad, diversión y espectáculo.
      </p>
      {/* Aquí irá video y galería cuando estén disponibles */}
      <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-inner flex items-center justify-center text-gray-500">
        Video o imagen destacada aquí
      </div>
    </main>
  )
}
