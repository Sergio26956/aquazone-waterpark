import CardParque from "@/components/CardParque"
import { parques } from "@/lib/data"

const flotantes = parques.filter((p) => p.categoria === "flotante")

export default function FlotantesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-600">Parques Acuáticos Flotantes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {flotantes.map((parque) => (
          <CardParque
            key={parque.slug}
            titulo={parque.titulo}
            descripcion={parque.descripcion}
            imagen={parque.imagen}
            slug={parque.slug}
          />
        ))}
      </div>
    </div>
  )
}
