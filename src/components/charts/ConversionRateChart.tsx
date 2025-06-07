'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { nombre: 'Landing Page A', tasa: 25 },
  { nombre: 'Landing Page B', tasa: 45 },
  { nombre: 'Landing Page C', tasa: 35 },
];

export default function ConversionRateChart() {
  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Tasa de conversión</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="nombre" />
          <YAxis unit="%" />
          <Tooltip />
          <Bar dataKey="tasa" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
