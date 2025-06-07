'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Instagram', interacción: 400 },
  { name: 'Facebook', interacción: 600 },
  { name: 'TikTok', interacción: 900 },
  { name: 'YouTube', interacción: 300 },
];

export default function EngagementChart() {
  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Interacción por red</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="interacción" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
