'use client';

import { useState, useEffect } from 'react';

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: string;
};

export default function UsuariosPanel() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // Simulación de usuarios
    setUsuarios([
      { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', rol: 'Administrador' },
      { id: 2, nombre: 'Ana López', email: 'ana@email.com', rol: 'Editor' },
      { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@email.com', rol: 'Usuario' },
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Usuarios Registrados</h2>
      <table className="min-w-full border bg-white">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} className="hover:bg-gray-50">
              <td className="p-2 border">{usuario.id}</td>
              <td className="p-2 border">{usuario.nombre}</td>
              <td className="p-2 border">{usuario.email}</td>
              <td className="p-2 border">{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
