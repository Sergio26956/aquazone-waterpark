'use client'

import React from 'react'
import VideoBackground from '@/components/VideoBackground'
import SocialTabs from '@/components/SocialTabs'
import SocialFooter from '@/components/SocialFooter'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground />

      <SocialTabs />
      <SocialFooter />

      <div className="absolute inset-0 flex items-center justify-center z-40">
        <motion.img
          src="/images/Logo.jpg"
          alt="Logo Aquazone Water Park"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-[300px] md:w-[400px] drop-shadow-2xl"
        />
      </div>
    </main>
  )
}
