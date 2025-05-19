import UsuariosPanel from '@/components/admin/UsuariosPanel';

export default function UsuariosPage() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Gestión de Usuarios</h1>
      <UsuariosPanel />
    </main>
  );
}
