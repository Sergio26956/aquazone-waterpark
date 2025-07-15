'use client';
import { useState } from 'react';

export default function Calendar() {
  const [events, setEvents] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addEvent = () => {
    if (input.trim() !== '') {
      setEvents([...events, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Calendario de Reservas</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded flex-1"
          placeholder="Nueva fecha o evento"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={addEvent}
        >
          Añadir
        </button>
      </div>
      <ul className="list-disc pl-6 space-y-1">
        {events.map((ev, idx) => (
          <li key={idx}>{ev}</li>
        ))}
      </ul>
    </div>
  );
}
