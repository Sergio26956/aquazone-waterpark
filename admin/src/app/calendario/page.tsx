"use client";
import { useState } from "react";

interface Evento {
  fecha: string;
  descripcion: string;
}

export default function CalendarioPage() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarEvento = () => {
    if (fecha && descripcion) {
      setEventos([...eventos, { fecha, descripcion }]);
      setFecha("");
      setDescripcion("");
    }
  };

  return (
    <section className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">Calendario de Eventos</h2>
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Descripción del evento"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="input input-bordered"
        />
        <button onClick={agregarEvento} className="btn btn-primary w-full">
          Añadir Evento
        </button>
      </div>
      <ul className="divide-y divide-white/10">
        {eventos.map((e, i) => (
          <li key={i} className="py-2">
            <span className="font-semibold text-cyan-300">{e.fecha}</span>: {e.descripcion}
          </li>
        ))}
      </ul>
    </section>
  );
}
