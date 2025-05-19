import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminUsuariosPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Gestión de Usuarios</h2>
      <p className="text-gray-700">Aquí se mostrarán los usuarios registrados y sus acciones.</p>
    </AdminLayout>
  );
}
