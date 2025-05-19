import EstadisticasPanel from '@/components/admin/EstadisticasPanel';

export default function EstadisticasPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Resumen General</h1>
      <EstadisticasPanel />
    </main>
  );
}
