'use client';

import { eventos } from '@/data/eventos';

export default function CalendarioEventos() {
  return (
    <section className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Calendario de Eventos</h2>
      <ul className="space-y-4">
        {eventos.map(({ id, titulo, fecha, tipo, estado }) => (
          <li key={id} className="bg-[#2c2c2c] p-4 rounded-lg">
            <p className="text-lg font-semibold">{titulo}</p>
            <p className="text-sm">📅 {fecha} — 🏷️ {tipo.toUpperCase()}</p>
            <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
              estado === 'confirmado' ? 'bg-green-500' : 'bg-yellow-500'
            }`}>
              {estado.toUpperCase()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
