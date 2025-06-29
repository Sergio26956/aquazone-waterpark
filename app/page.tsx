'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const VideoBackground = dynamic(() => import('@/components/VideoBackground'), { ssr: false })

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Fondo de video */}
      <VideoBackground />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido principal */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 p-4">
        {/* Logo */}
        <Image
          src="/images/Logo.jpg"
          alt="AQUAZONE Logo"
          width={250}
          height={250}
          className="mb-6 drop-shadow-xl"
          priority
        />

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-extrabold mb-10"
        >
          Bienvenido a AQUAZONE Water Park
        </motion.h1>

        {/* Botones de acceso */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/parques/flotantes" passHref>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-cyan-600 transition"
            >
              🌊 Parques Flotantes
            </motion.a>
          </Link>

          <Link href="/parques/terrestres" passHref>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:bg-yellow-600 transition"
            >
              🏙️ Parques Terrestres
            </motion.a>
          </Link>
        </div>
      </div>
    </main>
  )
}
