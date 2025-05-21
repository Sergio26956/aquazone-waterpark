"use client"

import { useState } from "react"

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mensaje enviado (simulado)")
    setForm({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          className="w-full border p-2 rounded"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          className="w-full border p-2 rounded h-32"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Contacto
