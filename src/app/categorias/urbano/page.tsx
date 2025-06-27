'use client'
import Image from 'next/image'

export default function UrbanoPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Parque Acuático Urbano Móvil
        </h1>
        <p className="text-gray-700 mb-10 text-lg">
          Instalaciones móviles para cualquier ciudad o evento. Diversión garantizada en cualquier lugar.
        </p>
        <Image
          src="/images/urbano_categoria.jpg"
          alt="Parque Urbano"
          width={800}
          height={500}
          className="rounded-xl shadow-xl mx-auto mb-8"
        />
        <div className="text-left space-y-4 text-gray-800">
          <p>
            Nuestros parques urbanos móviles están diseñados para instalarse temporalmente en espacios públicos o privados.
            Perfectos para campañas veraniegas, fiestas locales o eventos promocionales.
          </p>
          <ul className="list-disc list-inside">
            <li>Fácil montaje y desmontaje</li>
            <li>Variedad de atracciones para todas las edades</li>
            <li>Diseño modular adaptable al espacio disponible</li>
            <li>Incluye monitores y medidas de seguridad</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
