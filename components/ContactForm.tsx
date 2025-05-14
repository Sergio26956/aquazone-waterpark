'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef(null)
  const [status, setStatus] = useState('')

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    emailjs
      .sendForm('service_id', 'template_id', form.current!, 'user_key')
      .then(() => setStatus('Mensaje enviado.'))
      .catch(() => setStatus('Error al enviar.'))
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 p-4 bg-gray-100 rounded shadow">
      <input type="text" name="name" placeholder="Nombre" required className="w-full p-2 rounded border" />
      <input type="email" name="email" placeholder="Correo" required className="w-full p-2 rounded border" />
      <textarea name="message" placeholder="Mensaje" required className="w-full p-2 rounded border" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      <p className="text-sm">{status}</p>
    </form>
  )
}
