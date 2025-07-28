"use client";
import { useEffect, useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  registrado: string;
}

export default function UsuariosRegistrados() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const res = await fetch("/api/usuarios");
      const data = await res.json();
      setUsuarios(data);
    };
    obtenerUsuarios();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Usuarios Registrados</h2>
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-blue-100">
          <tr>
            <th scope="col" className="px-4 py-2">ID</th>
            <th scope="col" className="px-4 py-2">Nombre</th>
            <th scope="col" className="px-4 py-2">Email</th>
            <th scope="col" className="px-4 py-2">Registrado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.nombre}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.registrado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
