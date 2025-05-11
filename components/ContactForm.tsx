'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensaje enviado')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-6">
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} className="w-full p-2 border" />
      <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} className="w-full p-2 border" />
      <textarea name="mensaje" placeholder="Mensaje" onChange={handleChange} className="w-full p-2 border h-32" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Enviar</button>
    </form>
  )
}
