import CalendarioEventos from '@/components/admin/CalendarioEventos';

export default function CalendarioPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Calendario / Fechas Contratadas</h1>
      <CalendarioEventos />
    </main>
  );
}
