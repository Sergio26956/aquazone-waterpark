"use client"

export function AdminStats() {
  const datos = {
    reservas: 18,
    usuarios: 9,
    eventos: 5,
    mensajes: 3,
  }

  const bloques = [
    { label: "Reservas", valor: datos.reservas, color: "bg-blue-500" },
    { label: "Usuarios", valor: datos.usuarios, color: "bg-green-500" },
    { label: "Eventos", valor: datos.eventos, color: "bg-purple-500" },
    { label: "Mensajes", valor: datos.mensajes, color: "bg-red-500" },
  ]

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4">Resumen General</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bloques.map((bloque, i) => (
          <div
            key={i}
            className={`${bloque.color} text-white p-6 rounded-xl shadow text-center`}
          >
            <div className="text-3xl font-bold">{bloque.valor}</div>
            <div className="mt-2 text-sm">{bloque.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
