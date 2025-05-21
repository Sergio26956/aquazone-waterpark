import Link from "next/link"

const categorias = [
  {
    titulo: "Parque Acuático Flotante Modular",
    descripcion: "Ideal para playas o piscinas. Modular, seguro y divertido.",
    ruta: "/parques/flotante",
  },
  {
    titulo: "Parque Acuático Urbano Móvil",
    descripcion: "Para eventos en ciudades. Instalación rápida y espectacular.",
    ruta: "/parques/urbano",
  },
]

const Parques = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestras Categorías</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {categorias.map((cat, i) => (
          <Link href={cat.ruta} key={i}>
            <div className="p-6 border rounded-lg shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold mb-2">{cat.titulo}</h2>
              <p>{cat.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Parques
