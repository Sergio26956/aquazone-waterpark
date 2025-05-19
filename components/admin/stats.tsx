'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const dataBarras = [
  { mes: 'Ene', visitas: 400 },
  { mes: 'Feb', visitas: 800 },
  { mes: 'Mar', visitas: 600 },
  { mes: 'Abr', visitas: 1000 },
];

const dataCircular = [
  { name: 'Eventos', value: 40 },
  { name: 'Parques', value: 30 },
  { name: 'Privados', value: 30 },
];

const colores = ['#3182CE', '#63B3ED', '#90CDF4'];

export default function Estadisticas() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-xl font-semibold">1.220</p>
          <p className="text-sm text-gray-500">Visitas Mensuales</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-xl font-semibold">82</p>
          <p className="text-sm text-gray-500">Eventos Contratados</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-xl font-semibold">€24.600</p>
          <p className="text-sm text-gray-500">Ingresos Totales</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Visitas por Mes</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dataBarras}>
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitas" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Distribución Actividades</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={dataCircular}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {dataCircular.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
