'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Vídeo de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/video/fondo-principal.mp4" type="video/mp4" />
        Tu navegador no admite vídeos.
      </video>

      {/* Capa oscura encima del vídeo */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Contenido principal centrado */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
        >
          Bienvenidos a AQUAZONE Water Park
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-8 max-w-xl"
        >
          Vive la experiencia acuática más innovadora de Europa.
        </motion.p>

        <motion.a
          href="/flotantes"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
        >
          Descubrir parques
        </motion.a>
      </div>
    </div>
  )
}
