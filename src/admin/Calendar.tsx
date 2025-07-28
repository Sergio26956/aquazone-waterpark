'use client';

import { useEffect, useState } from 'react';

export default function Calendar() {
  const [events, setEvents] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/events');
    const data = await res.json();
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async () => {
    if (!input.trim()) return;
    setLoading(true);
    await fetch('/api/admin/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: input.trim() }),
    });
    setInput('');
    await fetchEvents();
  };

  const deleteEvent = async (index: number) => {
    setLoading(true);
    await fetch('/api/admin/events', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index }),
    });
    await fetchEvents();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calendario de Reservas</h2>
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Nueva fecha o evento"
          className="flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={addEvent}
          disabled={loading}
          className="px-5 bg-cyan-600 rounded-lg font-semibold hover:bg-cyan-700 disabled:opacity-50 transition"
        >
          Añadir
        </button>
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul className="list-disc pl-6 space-y-2">
          {events.map((ev, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{ev}</span>
              <button
                onClick={() => deleteEvent(idx)}
                className="text-red-500 font-bold hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
