'use client';

import { useState } from 'react';

type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: string;
};

const usuariosFalsos: Usuario[] = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', rol: 'cliente' },
  { id: 2, nombre: 'Ana García', email: 'ana@email.com', rol: 'admin' },
  { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@email.com', rol: 'cliente' },
];

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(usuariosFalsos);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Usuarios Registrados</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border text-left">Nombre</th>
            <th className="p-2 border text-left">Email</th>
            <th className="p-2 border text-left">Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} className="hover:bg-gray-50">
              <td className="p-2 border">{usuario.nombre}</td>
              <td className="p-2 border">{usuario.email}</td>
              <td className="p-2 border capitalize">{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
