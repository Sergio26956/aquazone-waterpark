"use client";
import { useState } from "react";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [records, setRecords] = useState<string[]>(["Evento 1", "Evento 2"]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
          }}
          className="bg-white p-6 rounded shadow max-w-sm w-full"
        >
          <h1 className="text-2xl font-bold mb-4">Acceso Privado</h1>
          <input type="password" placeholder="Clave de acceso" className="w-full mb-4 p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Eventos contratados</h2>
        <ul className="list-disc pl-5">
          {records.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Nuevo Registro</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = (e.target as any).registro.value;
            if (input) setRecords([...records, input]);
            (e.target as any).reset();
          }}
          className="flex gap-2"
        >
          <input name="registro" placeholder="Nombre del evento" className="border p-2 rounded w-full" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
        </form>
      </div>
    </main>
  );
}
