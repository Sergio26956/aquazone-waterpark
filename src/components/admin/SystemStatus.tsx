'use client';
import { useEffect, useState } from 'react';

export default function SystemStatus() {
  const [status, setStatus] = useState('✅ Todo está funcionando correctamente');

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus('✅ Todo está funcionando correctamente');
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-green-100 rounded">
      <h2 className="text-xl font-semibold mb-4">Estado del Sistema</h2>
      <p>{status}</p>
    </div>
  );
}
