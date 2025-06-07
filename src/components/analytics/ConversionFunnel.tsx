'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { step: 'Visitantes', count: 1000 },
  { step: 'Registro', count: 600 },
  { step: 'Prueba Gratis', count: 400 },
  { step: 'Compra', count: 200 },
];

export default function ConversionFunnel() {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Embudo de Conversión</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="step" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
