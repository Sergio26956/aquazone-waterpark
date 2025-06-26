'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import MainButtons from '@/components/MainButtons'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes floatLogo {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
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
      {/* Fondo animado */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/fondo.mp4"
      />

      {/* Logo flotante */}
      <motion.div
        className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image
          src="/imagenes/logo.jpg"
          alt="Logo AQUAZONE"
          width={200}
          height={200}
          className="logo-img rounded-full shadow-xl"
        />
      </motion.div>

      {/* Botón bajar */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleScroll}
          className="bg-white/70 hover:bg-white/90 text-black font-bold py-2 px-4 rounded-full shadow-md transition-all"
        >
          ↓ Explorar AQUAZONE
        </button>
      </div>

      {/* Botones principales animados */}
      <div className="absolute bottom-6 w-full z-10">
        <MainButtons />
      </div>

      {/* Sección inferior de introducción */}
      <div
        ref={scrollRef}
        className="relative z-20 w-full h-[80vh] bg-white flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
          Bienvenido a AQUAZONE
        </h2>
        <p className="text-gray-700 text-lg max-w-xl">
          Vive la experiencia acuática más impresionante de Europa. Parques flotantes y terrestres para todas las edades. Descubre nuestras atracciones espectaculares.
        </p>
      </div>
    </main>
  )
}
