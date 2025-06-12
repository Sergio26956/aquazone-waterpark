'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Enviando...');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Mensaje enviado correctamente.');
        e.currentTarget.reset();
      } else {
        setStatus('Error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('Error de red.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input type="text" name="nombre" placeholder="Tu nombre" required className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Tu email" required className="w-full border p-2 rounded" />
      <textarea name="mensaje" rows={4} placeholder="Tu mensaje" required className="w-full border p-2 rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Enviar
      </button>
      <p className="text-sm text-gray-600">{status}</p>
    </form>
  );
}
