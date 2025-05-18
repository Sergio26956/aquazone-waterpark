import Image from "next/image"
import Link from "next/link"

interface Props {
  titulo: string
  descripcion: string
  imagen: string
  slug: string
}

export default function CardParque({ titulo, descripcion, imagen, slug }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
      <Image src={imagen} alt={titulo} width={600} height={400} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">{titulo}</h3>
        <p className="text-gray-700 mb-4">{descripcion}</p>
        <Link href={`/parques/${slug}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Ver más
        </Link>
      </div>
    </div>
  )
}
