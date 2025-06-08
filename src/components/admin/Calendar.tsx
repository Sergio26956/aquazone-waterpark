'use client';
import { useState } from 'react';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Calendario de Eventos</h3>
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-2 border rounded"
      />
      {selectedDate && <p className="mt-2">Seleccionado: {selectedDate}</p>}
    </div>
  );
}
