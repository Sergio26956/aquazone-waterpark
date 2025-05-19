'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';

const stats = [
  { label: 'Reservas hoy', value: 42 },
  { label: 'Visitas web', value: 1280 },
  { label: 'Usuarios activos', value: 85 },
  { label: 'Total ingresos', value: '3.540€' },
];

export default function StatsCards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-md">
          <CardContent className="p-6">
            <CardTitle className="text-lg">{stat.label}</CardTitle>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
