'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="/videos/hero.mp4"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          AQUAZONE Water Park
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          Vive una experiencia acuática inolvidable
        </p>
        <Link
          href="/contacto"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          ¡Explorar ahora!
        </Link>
      </motion.div>
    </section>
  )
}
