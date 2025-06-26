const items = [
  {
    title: "100% Seguro",
    description: "Cumplimos con todas las normativas europeas de seguridad acuática.",
  },
  {
    title: "Montaje rápido",
    description: "Instalamos y desmontamos el parque acuático en tiempo récord.",
  },
  {
    title: "Diversión garantizada",
    description: "Diseñado para todas las edades y gustos. ¡Nadie se queda fuera!",
  },
]

export default function InfoGrid() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => (
          <div key={i} className="p-6 rounded-xl shadow hover:scale-105 transition-all">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
