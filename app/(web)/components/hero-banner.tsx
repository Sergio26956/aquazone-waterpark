"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <motion.div
      className="relative w-full h-[80vh] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Image
        src="/hero-aquazone.jpg"
        alt="AQUAZONE Water Park"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">Bienvenidos a AQUAZONE</h1>
          <p className="text-xl max-w-xl mx-auto">
            Parques acuáticos espectaculares para todas las edades. Flotantes, móviles y únicos.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
