import CardParque from "@/components/CardParque"
import { parques } from "@/lib/data"

const urbanos = parques.filter((p) => p.categoria === "urbano")

export default function UrbanosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-600">Parques Acuáticos Urbanos Móviles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {urbanos.map((parque) => (
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
