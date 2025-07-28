'use client';
import { useState } from 'react';

export default function ContactoForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'exito' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado('enviando');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      const data = await res.json();
      if (res.ok) {
        setEstado('exito');
        setNombre('');
        setEmail('');
        setMensaje('');
      } else {
        setEstado('error');
        setErrorMsg(data.message || 'Error desconocido');
      }
    } catch {
      setEstado('error');
      setErrorMsg('Error de red');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-center">Contacto</h2>
      <input
        type="text"
        placeholder="Nombre"
        className="w-full border px-3 py-2 rounded"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border px-3 py-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Mensaje"
        className="w-full border px-3 py-2 rounded"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
        rows={5}
      />
      <button
        type="submit"
        disabled={estado === 'enviando'}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {estado === 'enviando' ? 'Enviando...' : 'Enviar'}
      </button>
      {estado === 'exito' && <p className="text-green-600 text-center">Mensaje enviado correctamente.</p>}
      {estado === 'error' && <p className="text-red-600 text-center">Error: {errorMsg}</p>}
    </form>
  );
}
