import Estadisticas from '@/components/admin/Estadisticas';

export default function AdminDashboard() {
  return (
    <main className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Panel de Control</h1>
      <Estadisticas />
    </main>
  );
}
