'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState('');

  const handleAccess = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAccess(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  if (access) {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Zona Privada AQUAZONE</h1>
        <ul className="space-y-3">
          <li>📅 Calendario de contrataciones</li>
          <li>🖼️ Gestión de imágenes</li>
          <li>📊 Estadísticas</li>
          <li>⚙️ Configuraciones</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-sm mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Acceso restringido</h1>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-4 rounded text-black"
      />
      <button
        onClick={handleAccess}
        className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700"
      >
        Entrar
      </button>
    </div>
  );
}
