'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import VideoBackground from '@/components/VideoBackground'

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <VideoBackground />

      {/* Capa oscura para legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-10 text-white px-4 text-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/Logo.jpg"
            alt="Logo"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
            priority
          />
        </motion.div>

        {/* Botones principales */}
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl text-lg"
          >
            <Link href="/flotantes">🌊 Parques Acuáticos Flotantes</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl text-lg"
          >
            <Link href="/terrestres">🏙️ Parques Acuáticos Terrestres</Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
