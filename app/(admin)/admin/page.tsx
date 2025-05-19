import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Bienvenido al Panel de Administración</h2>
      <p className="text-gray-700">Desde aquí puedes gestionar toda la plataforma de Aquazone.</p>
    </AdminLayout>
  );
}
