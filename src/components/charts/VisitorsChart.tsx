'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lunes', visitas: 400 },
  { name: 'Martes', visitas: 300 },
  { name: 'Miércoles', visitas: 500 },
  { name: 'Jueves', visitas: 200 },
  { name: 'Viernes', visitas: 600 },
];

export default function VisitorsChart() {
  return (
    <div className="w-full h-64 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Visitas por día</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitas" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
