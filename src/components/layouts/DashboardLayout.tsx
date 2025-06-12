import { ReactNode } from 'react';
import Sidebar from '../ui/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
