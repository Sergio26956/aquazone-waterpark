'use client';
import { useState } from 'react';

export default function Calendar() {
  const [events, setEvents] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addEvent = () => {
    if (input.trim()) {
      setEvents([...events, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Calendario de Reservas</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="Nueva fecha o evento"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addEvent} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Añadir
        </button>
      </div>
      <ul className="list-disc pl-6">
        {events.map((ev, idx) => (
          <li key={idx}>{ev}</li>
        ))}
      </ul>
    </div>
  );
}
