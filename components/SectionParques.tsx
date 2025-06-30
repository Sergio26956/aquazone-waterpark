'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function SectionParques() {
  const parques = [
    {
      nombre: 'Parques Flotantes',
      imagen: '/images/flotante.jpg',
      enlace: '/parques/flotantes',
    },
    {
      nombre: 'Parques Urbanos',
      imagen: '/images/urbano.jpg',
      enlace: '/parques/urbanos',
    },
  ]

  return (
    <section className="grid md:grid-cols-2 gap-8 py-16">
      {parques.map((p) => (
        <Link
          key={p.nombre}
          href={p.enlace}
          className="relative group overflow-hidden rounded-3xl shadow-lg"
        >
          <Image
            src={p.imagen}
            alt={p.nombre}
            width={800}
            height={600}
            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-3xl font-bold group-hover:bg-black/30 transition">
            {p.nombre}
          </div>
        </Link>
      ))}
    </section>
  )
}
