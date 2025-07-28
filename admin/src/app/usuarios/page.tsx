"use client";
import { useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

export default function UsuariosPage() {
  const [usuarios] = useState<Usuario[]>([
    { id: 1, nombre: "Admin", email: "admin@aqua.com" },
    { id: 2, nombre: "Sergio", email: "sergio@aqua.com" },
  ]);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">Usuarios registrados</h2>
      <ul className="divide-y divide-white/10">
        {usuarios.map((u) => (
          <li key={u.id} className="py-2">
            <strong>{u.nombre}</strong> — <span className="text-gray-400">{u.email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
