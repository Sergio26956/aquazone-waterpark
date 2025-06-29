'use client'
import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    // Aquí se puede conectar con una API real en el futuro
    setTimeout(() => setEnviado(false), 5000)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-700 to-blue-900 p-8 text-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        {enviado ? (
          <p className="text-green-300 text-lg">Gracias. Te contactaremos en breve.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-600"
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-600"
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-2 rounded font-bold"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
