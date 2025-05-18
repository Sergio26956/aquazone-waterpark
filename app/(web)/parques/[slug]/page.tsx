import { parques } from "@/lib/data"
import Image from "next/image"

export default function ParqueDetalle({ params }: { params: { slug: string } }) {
  const parque = parques.find((p) => p.slug === params.slug)

  if (!parque) {
    return <div className="text-center text-red-500">Parque no encontrado</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">{parque.titulo}</h1>
      <Image
        src={parque.imagen}
        alt={parque.titulo}
        width={1000}
        height={600}
        className="rounded-xl w-full object-cover mb-6"
      />
      <p className="text-lg leading-relaxed text-gray-700">{parque.descripcion}</p>
    </div>
  )
}
