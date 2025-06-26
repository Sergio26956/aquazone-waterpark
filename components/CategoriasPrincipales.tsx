'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categorias = [
  {
    titulo: 'Parque Acuático Flotante',
    descripcion: 'Atracciones modulares flotantes sobre el agua, ideales para playas y embalses.',
    imagen: '/imagenes/flotante_categoria.jpg',
    enlace: '/categorias/flotante'
  },
  {
    titulo: 'Parque Acuático Urbano',
    descripcion: 'Estructuras móviles acuáticas para instalar en cualquier ciudad.',
    imagen: '/imagenes/urbano_categoria.jpg',
    enlace: '/categorias/urbano'
  }
]

export default function CategoriasPrincipales() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Categorías Principales</h2>
      <div className="grid md:grid-cols-2 gap-12 px-6 max-w-7xl mx-auto">
        {categorias.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group shadow-lg rounded-xl overflow-hidden"
          >
            <Link href={cat.enlace}>
              <div className="relative w-full h-64">
                <Image
                  src={cat.imagen}
                  alt={cat.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">{cat.titulo}</h3>
                <p className="text-gray-700">{cat.descripcion}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
