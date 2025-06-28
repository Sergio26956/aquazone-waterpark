// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import VideoBackground from '@/components/VideoBackground'
import SocialTabs from '@/components/SocialTabs'
import SocialFooter from '@/components/SocialFooter'

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Fondo en video */}
      <VideoBackground />

      {/* ⚡ Capa de contenido encima */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-white px-4 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold drop-shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          AQUAZONE WATER PARK
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Parques acuáticos flotantes y urbanos móviles al nivel más avanzado del mundo.
        </motion.p>

        {/* 🌐 Tabs sociales (IA futura integrada) */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <SocialTabs />
        </motion.div>
      </div>

      {/* 👣 Footer flotante moderno */}
      <SocialFooter />
    </div>
  )
}
