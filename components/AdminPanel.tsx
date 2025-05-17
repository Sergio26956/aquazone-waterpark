"use client";

import { useState } from "react";

export default function AdminPanel() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === "aquazone2025") {
      setAccess(true);
    }
  }

  if (!access) {
    return (
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="w-full bg-blue-700 text-white p-2 rounded">
          Acceder
        </button>
      </form>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Panel Administrativo</h2>
      <ul className="space-y-2">
        <li>- Calendario de fechas contratadas</li>
        <li>- Gestión de usuarios registrados</li>
        <li>- Acceso a estadísticas</li>
        <li>- Subida de nuevos contenidos multimedia</li>
      </ul>
    </div>
  );
}
