"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí enviarías el formulario
    alert("Mensaje enviado correctamente")
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
