import DashboardHeader from "./DashboardHeader";
import AdminNav from "./AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <AdminNav />
      <main className="p-6">{children}</main>
    </div>
  );
}
