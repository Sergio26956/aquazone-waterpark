'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes floatLogo {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }

      @media screen and (max-width: 768px) {
        .main-title {
          font-size: 2rem;
        }
        .logo-img {
          width: 120px !important;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/fondo.mp4"
      />

      {/* Logo animado */}
      <motion.div
        className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/imagenes/logo.jpg"
          alt="Logo AQUAZONE"
          width={200}
          height={200}
          className="logo-img rounded-full shadow-2xl border-4 border-white"
        />
      </motion.div>

      {/* Botón de exploración */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={handleScroll}
          className="bg-white/80 hover:bg-white text-blue-800 font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur"
        >
          ↓ Explorar AQUAZONE
        </button>
      </div>

      {/* Sección introductoria */}
      <div
        ref={scrollRef}
        className="relative z-30 w-full h-[80vh] bg-white flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Bienvenido a AQUAZONE
        </h2>
        <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
          Vive la experiencia acuática más impresionante de Europa. Parques flotantes y terrestres para todas las edades. Descubre nuestras atracciones espectaculares y sumérgete en un mundo de diversión acuática.
        </p>
      </div>
    </main>
  )
}
