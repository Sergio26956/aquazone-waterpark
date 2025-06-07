'use client';
import { useState, useEffect } from 'react';

export default function PerformanceOverview() {
  const [metrics, setMetrics] = useState({
    uptime: '99.98%',
    responseTime: '120ms',
    errors: '0.2%',
  });

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Resumen de Rendimiento</h2>
      <ul className="space-y-2">
        <li><strong>Disponibilidad:</strong> {metrics.uptime}</li>
        <li><strong>Tiempo de Respuesta:</strong> {metrics.responseTime}</li>
        <li><strong>Errores:</strong> {metrics.errors}</li>
      </ul>
    </div>
  );
}
