"use client";

import { useState } from "react";

export default function Calendar() {
  const [selected, setSelected] = useState<string | null>(null);

  const today = new Date();
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d.toISOString().split("T")[0];
  });

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h3 className="text-xl font-bold mb-2">Calendario de reservas</h3>
      <div className="grid grid-cols-5 gap-2">
        {days.map((date) => (
          <button
            key={date}
            onClick={() => setSelected(date)}
            className={`p-2 border rounded ${selected === date ? "bg-blue-600 text-white" : ""}`}
          >
            {date}
          </button>
        ))}
      </div>
      {selected && <p className="mt-4 text-green-700">Fecha seleccionada: {selected}</p>}
    </div>
  );
}
