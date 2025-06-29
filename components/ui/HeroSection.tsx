'use client'

import { motion } from 'framer-motion'
import VideoBackground from '@/components/VideoBackground'
import MainButtons from '@/components/MainButtons'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <VideoBackground />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AQUAZONE WATER PARK
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Innovación, diversión y tecnología acuática avanzada. Bienvenido al futuro.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <MainButtons />
        </motion.div>
        <ScrollIndicator />
      </div>
    </section>
  )
}
