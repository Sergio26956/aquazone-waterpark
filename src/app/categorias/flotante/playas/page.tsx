'use client'
import Image from 'next/image'

export default function PlayasFlotante() {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Parques Flotantes en Playas y Lagos</h1>
        <Image
          src="/images/playa_flotante.jpg"
          alt="Parque en playa o lago"
          width={800}
          height={500}
          className="rounded-xl shadow-xl mx-auto mb-8"
        />
        <p className="text-lg text-gray-700">
          Atracciones sobre el agua que ofrecen una experiencia veraniega inolvidable. Aptos para cualquier playa, lago o embalse. 
          Alta visibilidad y atractivo para el público.
        </p>
      </div>
    </div>
  )
}
