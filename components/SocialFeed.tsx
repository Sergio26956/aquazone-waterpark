'use client';
import { useState, useEffect } from 'react';

export default function SocialFeed() {
  const [feeds, setFeeds] = useState<string[]>([]);

  useEffect(() => {
    // Simulado: se podría conectar con APIs reales más adelante
    setFeeds([
      '📸 Nuevo parque en Valencia inaugurado con éxito 🎉',
      '🎥 Vídeo viral en Instagram alcanzando 100K vistas 🚀',
      '🛟 Reservas abiertas para el verano 2026 🔥'
    ]);
  }, []);

  return (
    <div className="bg-cyan-100 p-4 rounded shadow mt-6">
      <h3 className="font-bold text-lg mb-2">Actualizaciones en Tiempo Real</h3>
      <ul className="list-disc pl-6 text-sm">
        {feeds.map((item, idx) => (<li key={idx}>{item}</li>))}
      </ul>
    </div>
  );
}
