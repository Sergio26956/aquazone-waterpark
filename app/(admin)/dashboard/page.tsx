import DashboardLayout from '@/components/admin/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-4">Bienvenido a tu Panel AQUAZONE</h1>
      <p className="text-gray-300">Desde aquí puedes gestionar tus eventos, calendario y más.</p>
    </DashboardLayout>
  );
}
