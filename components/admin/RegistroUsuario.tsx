'use client';

import { useState } from 'react';

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('cliente');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo usuario:', { nombre, email, rol });
    // Aquí irá la lógica real para guardar el usuario en backend o base de datos.
    setNombre('');
    setEmail('');
    setRol('cliente');
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-green-600">Registrar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="cliente">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Registrar Usuario
        </button>
      </form>
    </div>
  );
}
