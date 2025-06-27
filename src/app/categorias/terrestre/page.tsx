'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function TerrestrePage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <section className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
        >
          Parques Acuáticos Terrestres
        </motion.h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Descubre nuestras atracciones terrestres móviles y de alto impacto diseñadas para disfrutar en ciudades, playas y espacios urbanos.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Urbano Móvil */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
        >
          <Link href="/categorias/terrestre/urbano-movil">
            <Image 
              src="/images/urbano_categoria.jpg" 
              alt="Parque Acuático Urbano Móvil"
              width={800}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Parque Acuático Urbano Móvil</h2>
              <p className="text-gray-700">
                Un parque portátil con 5 atracciones acuáticas únicas, ideales para eventos y ciudades.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Kamikaze Jump */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
        >
          <Link href="/categorias/terrestre/kamikaze-jump">
            <Image 
              src="/images/kamikaze_categoria.jpg" 
              alt="Kamikaze Jump"
              width={800}
              height={500}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Kamikaze Jump</h2>
              <p className="text-gray-700">
                Atracción extrema con plataformas de salto libre y deslizamientos desde gran altura.
              </p>
            </div>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
