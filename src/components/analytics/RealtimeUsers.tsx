'use client';
import { useEffect, useState } from 'react';

export default function RealtimeUsers() {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(Math.floor(Math.random() * 100 + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-green-50 border border-green-300 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Usuarios en Tiempo Real</h2>
      <p className="text-3xl font-bold">{users}</p>
    </div>
  );
}
