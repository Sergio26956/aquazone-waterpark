'use client';
import { useState } from 'react';

interface Campaña {
  titulo: string;
  mensaje: string;
  tipo: 'email' | 'redes';
}

export default function CampaignManager() {
  const [campañas, setCampañas] = useState<Campaña[]>([]);
  const [titulo, setTitulo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipo, setTipo] = useState<'email' | 'redes'>('email');

  const crearCampaña = () => {
    if (titulo && mensaje) {
      setCampañas([...campañas, { titulo, mensaje, tipo }]);
      setTitulo('');
      setMensaje('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Gestión de Campañas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Título de campaña"
          className="border p-2 rounded"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={tipo}
          onChange={(e) => setTipo(e.target.value as 'email' | 'redes')}
        >
          <option value="email">Email</option>
          <option value="redes">Redes Sociales</option>
        </select>
        <textarea
          placeholder="Mensaje"
          className="border p-2 rounded"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>
      <button
        onClick={crearCampaña}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Crear Campaña
      </button>

      <ul className="mt-6 space-y-2">
        {campañas.map((c, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            <strong>{c.titulo}</strong> <span className="text-sm text-gray-600">({c.tipo})</span>
            <p className="mt-2">{c.mensaje}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
