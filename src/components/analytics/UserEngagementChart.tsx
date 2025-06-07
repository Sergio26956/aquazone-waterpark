'use client';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function UserEngagementChart() {
  const [data, setData] = useState([
    { name: 'Lun', users: 200 },
    { name: 'Mar', users: 300 },
    { name: 'Mié', users: 250 },
    { name: 'Jue', users: 400 },
    { name: 'Vie', users: 350 },
    { name: 'Sáb', users: 500 },
    { name: 'Dom', users: 450 },
  ]);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Interacción de Usuarios</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
