"use client"
import { useState } from "react"

export default function SettingsPage() {
  const [email, setEmail] = useState("info@aquazone.com")
  const [empresa, setEmpresa] = useState("AQUAZONE WATER PARK")

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Configuración General</h2>
      <div>
        <label className="block font-semibold mb-1">Nombre Empresa:</label>
        <input
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Correo de Contacto:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
    </div>
  )
}
