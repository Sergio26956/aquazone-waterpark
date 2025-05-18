"use client"

import { useState } from "react"

interface Usuario {
  nombre: string
  email: string
}

export function AdminUsers() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleAddUsuario = () => {
    if (nombre && email) {
      setUsuarios([...usuarios, { nombre, email }])
      setNombre("")
      setEmail("")
    }
  }

  return (
    <div className="mt-10 border p-6 rounded-xl bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Gestión de Usuarios</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleAddUsuario}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Añadir
        </button>
      </div>
      <ul className="list-disc ml-6 text-gray-700">
        {usuarios.map((u, i) => (
          <li key={i}>
            {u.nombre} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
