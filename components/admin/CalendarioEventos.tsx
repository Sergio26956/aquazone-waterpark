'use client';

import { useState } from 'react';

type Evento = {
  id: number;
  titulo: string;
  fecha: string;
  lugar: string;
};

export default function CalendarioEventos() {
  const [eventos, setEventos] = useState<Evento[]>([
    { id: 1, titulo: 'Alquiler Parque Flotante', fecha: '2025-06-15', lugar: 'Playa de Alqueva' },
    { id: 2, titulo: 'Evento Urbano Móvil', fecha: '2025-07-02', lugar: 'Plaza Central, Sevilla' },
    { id: 3, titulo: 'Fiesta Privada Acuática', fecha: '2025-08-09', lugar: 'Club Náutico' },
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Eventos Contratados</h2>
      <div className="space-y-3">
        {eventos.map((evento) => (
          <div key={evento.id} className="bg-white border shadow p-4 rounded">
            <p><strong>Título:</strong> {evento.titulo}</p>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
