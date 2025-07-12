'use client';
import { useState } from 'react';

export default function MailForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Enviando...');

    const res = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, event }),
    });

    const data = await res.json();
    setStatus(data.message || data.error || 'Error');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center">Enviar Email Automático IA</h2>
      <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Correo" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Evento o reserva" className="w-full p-2 border rounded" value={event} onChange={(e) => setEvent(e.target.value)} required />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar Email</button>
      {status && <p className="text-center mt-2 text-sm">{status}</p>}
    </form>
  );
}
