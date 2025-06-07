'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Simulación de envío
    setTimeout(() => {
      setStatus('Mensaje enviado correctamente');
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        placeholder="Mensaje"
        className="w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
      {status && <p className="text-sm text-green-600">{status}</p>}
    </form>
  );
}
