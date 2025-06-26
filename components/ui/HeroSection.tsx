'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/fondo.mp4"
      />
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/imagenes/logo.jpg"
          alt="Logo AQUAZONE"
          width={180}
          height={180}
          className="mx-auto rounded-full shadow-2xl"
        />
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          AQUAZONE WATER PARK
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          La experiencia acuática más impactante de Europa te espera. Atracciones para todas las edades, sobre agua y tierra.
        </p>
      </motion.div>
    </section>
  )
}
