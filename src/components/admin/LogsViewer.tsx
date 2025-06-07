'use client';
import { useEffect, useState } from 'react';

export default function LogsViewer() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Simulación de logs
    setLogs([
      '🟢 Inicio del sistema',
      '🔄 Sincronización completada',
      '✅ Actualización aplicada correctamente',
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Visor de Logs</h2>
      <ul className="space-y-1">
        {logs.map((log, i) => (
          <li key={i} className="text-sm bg-black text-green-400 p-2 rounded font-mono">{log}</li>
        ))}
      </ul>
    </div>
  );
}
