'use client';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { mes: 'Ene', crecimiento: 100 },
  { mes: 'Feb', crecimiento: 300 },
  { mes: 'Mar', crecimiento: 500 },
  { mes: 'Abr', crecimiento: 800 },
  { mes: 'May', crecimiento: 1000 },
];

export default function GrowthChart() {
  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Crecimiento mensual</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="crecimiento" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
