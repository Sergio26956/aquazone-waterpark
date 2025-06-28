'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Sección 1: Fondo en vídeo */}
      <div className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src="/video/fondo-principal.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
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

      {/* Sección 2: Collage visual */}
      <section className="relative bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Innovación, diversión y adrenalina
          </motion.h2>
          <p className="text-lg md:text-xl mb-12">
            Más que un parque acuático: una experiencia de otro nivel.
          </p>

          {/* Galería animada */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/images/${img}`}
                  alt={`AQUAZONE ${index + 1}`}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
