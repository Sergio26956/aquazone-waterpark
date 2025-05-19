'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function AdminCalendarioPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Calendario de Actividades</h2>
      <p className="text-gray-700 mb-4">Selecciona una fecha para ver eventos o agendar.</p>
      <div className="bg-white p-4 rounded-lg shadow max-w-sm">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>
    </AdminLayout>
  );
}
