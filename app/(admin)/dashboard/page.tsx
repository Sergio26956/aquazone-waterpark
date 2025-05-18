"use client"

import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const [usuario, setUsuario] = useState("")

  useEffect(() => {
    // Aquí puedes agregar lógica real de autenticación si lo necesitas
    setUsuario("Administrador")
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Panel de Administración</h1>
      <p className="text-lg text-gray-700 mb-4">Bienvenido, {usuario}.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Reservas</h2>
          <p className="text-gray-600">Accede a todas las fechas y eventos reservados.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Usuarios Registrados</h2>
          <p className="text-gray-600">Consulta la lista completa de usuarios.</p>
        </div>
      </div>
    </div>
  )
}
