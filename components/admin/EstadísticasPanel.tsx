'use client';

import { useEffect, useState } from 'react';

type Estadistica = {
  titulo: string;
  valor: number;
  color: string;
};

export default function EstadisticasPanel() {
  const [estadisticas, setEstadisticas] = useState<Estadistica[]>([]);

  useEffect(() => {
    // Simulación de datos
    setEstadisticas([
      { titulo: 'Visitas Totales', valor: 1245, color: 'bg-blue-500' },
      { titulo: 'Contrataciones', valor: 68, color: 'bg-green-500' },
      { titulo: 'Consultas Recibidas', valor: 154, color: 'bg-yellow-500' },
      { titulo: 'Eventos Completados', valor: 39, color: 'bg-purple-500' },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {estadisticas.map((item, index) => (
        <div key={index} className={`p-4 rounded shadow text-white ${item.color}`}>
          <h3 className="text-lg font-semibold">{item.titulo}</h3>
          <p className="text-2xl">{item.valor}</p>
        </div>
      ))}
    </div>
  );
}
