'use client';
import { useState } from 'react';

export default function JobApplicationForm() {
  const [data, setData] = useState({ name: '', email: '', cv: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud enviada correctamente');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Aplicación de Empleo</h2>
      <input
        name="name"
        required
        placeholder="Tu nombre"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Tu correo"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="cv"
        required
        placeholder="Enlace a tu CV"
        value={data.cv}
        onChange={(e) => setData({ ...data, cv: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
        Enviar Solicitud
      </button>
    </form>
  );
}
