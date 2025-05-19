'use client';

import { useState, useEffect } from 'react';

type Mensaje = {
  id: number;
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

export default function ContactosPanel() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

  useEffect(() => {
    // Simulación de mensajes
    setMensajes([
      {
        id: 1,
        nombre: 'Laura Gómez',
        email: 'laura@email.com',
        asunto: 'Consulta de disponibilidad',
        mensaje: 'Hola, me gustaría saber si hay fechas disponibles en julio.',
      },
      {
        id: 2,
        nombre: 'Pedro Fernández',
        email: 'pedro@email.com',
        asunto: 'Precios',
        mensaje: '¿Cuánto cuesta alquilar el parque acuático por un día completo?',
      },
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-700">Mensajes Recibidos</h2>
      <div className="space-y-4">
        {mensajes.map((msg) => (
          <div key={msg.id} className="bg-white p-4 rounded shadow border">
            <p><strong>Nombre:</strong> {msg.nombre}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Asunto:</strong> {msg.asunto}</p>
            <p><strong>Mensaje:</strong> {msg.mensaje}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
