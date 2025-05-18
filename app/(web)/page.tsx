import FiltroCategorias from "@/components/FiltroCategorias"
import CardParque from "@/components/CardParque"
import { parques } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-700">AQUAZONE Water Park</h1>
      <p className="text-center mt-2 text-gray-600">Elige una categoría para explorar los parques acuáticos</p>
      <FiltroCategorias />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {parques.map((parque) => (
          <CardParque
            key={parque.slug}
            titulo={parque.titulo}
            descripcion={parque.descripcion}
            imagen={parque.imagen}
            slug={parque.slug}
          />
        ))}
      </div>
    </>
  )
}
