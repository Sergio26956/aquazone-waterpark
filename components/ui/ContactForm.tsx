'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Enviado correctamente ✅')
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto grid gap-4 bg-white shadow-md p-6 rounded-2xl">
      <input
        type="text"
        placeholder="Nombre completo"
        required
        className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        required
        className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Mensaje"
        rows={4}
        required
        className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition"
      >
        Enviar
      </button>
      {status && <p className="text-green-600 font-semibold text-center">{status}</p>}
    </form>
  )
}
