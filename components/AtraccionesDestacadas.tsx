'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const atracciones = [
  {
    nombre: 'Kamikaze Jump',
    descripcion: 'Una caída libre desde lo más alto. Solo para los más valientes.',
    imagen: '/imagenes/kamikaze.jpg'
  },
  {
    nombre: 'Piscina Modular XL',
    descripcion: 'Diversión segura en una piscina gigante modular.',
    imagen: '/imagenes/piscina.jpg'
  },
  {
    nombre: 'Parque Flotante Extremo',
    descripcion: 'Una experiencia única en el agua con obstáculos y saltos.',
    imagen: '/imagenes/flotante.jpg'
  }
]

export default function AtraccionesDestacadas() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Atracciones Destacadas</h2>
      <div className="grid gap-10 px-6 md:grid-cols-3 max-w-7xl mx-auto">
        {atracciones.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.imagen}
              alt={item.nombre}
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{item.nombre}</h3>
              <p className="text-gray-700">{item.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
