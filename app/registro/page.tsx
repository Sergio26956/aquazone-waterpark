"use client"

import { useState } from "react"

const Registro = () => {
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se puede guardar en base de datos si se implementa
    setMensaje("Gracias por registrarte. Te contactaremos pronto.")
  }

  return (
    <div className="min-h-screen p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6">Registro de Usuario (Opcional)</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 border rounded"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Registrarse
        </button>
        {mensaje && <p className="text-green-600">{mensaje}</p>}
      </form>
    </div>
  )
}

export default Registro
