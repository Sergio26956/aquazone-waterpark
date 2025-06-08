'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Mensaje enviado correctamente.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      <input type="text" placeholder="Nombre" required className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
      <textarea placeholder="Mensaje" required className="w-full p-2 border rounded" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
      {status && <p className="text-green-600">{status}</p>}
    </form>
  );
}
