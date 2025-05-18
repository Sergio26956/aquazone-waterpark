"use client"

import { useEffect, useState } from "react"

interface Reserva {
  id: number
  nombre: string
  fecha: string
  actividad: string
}

export default function Dashboard() {
  const [reservas, setReservas] = useState<Reserva[]>([])

  useEffect(() => {
    // Simulación de carga de datos
    const data: Reserva[] = [
      { id: 1, nombre: "Juan Pérez", fecha: "2025-07-20", actividad: "Flotante Playa" },
      { id: 2, nombre: "Ana Torres", fecha: "2025-07-21", actividad: "Kamikaze Jump" },
    ]
    setReservas(data)
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Panel de Reservas</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
        <table className="min-w-full table-auto border">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Fecha</th>
              <th className="px-4 py-2 border">Actividad</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id} className="text-sm">
                <td className="px-4 py-2 border">{reserva.id}</td>
                <td className="px-4 py-2 border">{reserva.nombre}</td>
                <td className="px-4 py-2 border">{reserva.fecha}</td>
                <td className="px-4 py-2 border">{reserva.actividad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
