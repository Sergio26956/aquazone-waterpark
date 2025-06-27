'use client'
import Image from 'next/image'

export default function PiscinasFlotante() {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Parques Flotantes para Piscinas</h1>
        <Image
          src="/images/piscina_flotante.jpg"
          alt="Parque en piscina"
          width={800}
          height={500}
          className="rounded-xl shadow-xl mx-auto mb-8"
        />
        <p className="text-lg text-gray-700">
          Diseñados especialmente para piscinas municipales o privadas. Seguros, divertidos y modulares. Incluyen plataformas, toboganes y obstáculos.
        </p>
      </div>
    </div>
  )
}
