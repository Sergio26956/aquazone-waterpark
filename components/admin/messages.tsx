"use client"

const mensajes = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@example.com",
    mensaje: "¿Cuál es el horario del parque este fin de semana?",
    fecha: "2025-05-17",
  },
  {
    id: 2,
    nombre: "Laura Gómez",
    email: "laura@example.com",
    mensaje: "Estoy interesada en reservar para un cumpleaños.",
    fecha: "2025-05-16",
  },
]

export function AdminMessages() {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4">Mensajes de Contacto</h2>
      <div className="space-y-4">
        {mensajes.map((msg) => (
          <div key={msg.id} className="border rounded-lg p-4 shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{msg.nombre}</p>
                <p className="text-sm text-neutral-500">{msg.email}</p>
              </div>
              <span className="text-sm text-neutral-400">{msg.fecha}</span>
            </div>
            <p className="mt-2">{msg.mensaje}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
