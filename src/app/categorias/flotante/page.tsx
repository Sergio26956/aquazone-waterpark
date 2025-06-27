'use client'
import Image from 'next/image'

export default function FlotantePage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Parque Acuático Flotante Modular
        </h1>
        <p className="text-gray-700 mb-10 text-lg">
          Atracciones flotantes únicas para piscinas, playas, embalses o lagos. ¡Diversión total sobre el agua!
        </p>
        <Image
          src="/images/flotante_categoria.png"
          alt="Parque Flotante"
          width={800}
          height={500}
          className="rounded-xl shadow-xl mx-auto mb-8"
        />
        <div className="text-left space-y-4 text-gray-800">
          <p>
            Nuestros parques flotantes ofrecen una experiencia acuática inolvidable.
            Pueden instalarse en cualquier superficie de agua tranquila, y se adaptan al espacio y profundidad disponibles.
          </p>
          <ul className="list-disc list-inside">
            <li>Modular y personalizable</li>
            <li>Fabricado con materiales de alta resistencia</li>
            <li>Incluye elementos de salto, escalada, equilibrio y toboganes</li>
            <li>Cumple con todas las normativas europeas de seguridad</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
