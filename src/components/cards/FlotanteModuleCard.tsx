'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function FlotanteModuleCard() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/categorias/flotante')
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white"
    >
      <Image
        src="/images/flotante_categoria.png"
        alt="Parque Acuático Flotante"
        width={600}
        height={400}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">
          Parque Acuático Flotante
        </h3>
        <p className="text-gray-600 text-sm text-center">
          Vive una aventura única sobre el agua en nuestros módulos flotantes.
        </p>
      </div>
    </div>
  )
}
