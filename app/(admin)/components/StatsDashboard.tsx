'use client';

export default function StatsDashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Estadísticas generales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-3xl font-bold">+12.000</p>
          <p className="text-sm text-gray-500">Visitantes totales</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-3xl font-bold">€34.500</p>
          <p className="text-sm text-gray-500">Ingresos acumulados</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-3xl font-bold">98%</p>
          <p className="text-sm text-gray-500">Satisfacción media</p>
        </div>
      </div>
    </div>
  );
}
