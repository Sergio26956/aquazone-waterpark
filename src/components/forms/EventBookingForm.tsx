'use client';
import { useState } from 'react';

export default function EventBookingForm() {
  const [data, setData] = useState({ name: '', date: '', people: 1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reserva realizada para ${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Reserva tu Evento</h2>
      <input
        name="name"
        placeholder="Nombre del contacto"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="date"
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="people"
        type="number"
        min={1}
        value={data.people}
        onChange={(e) => setData({ ...data, people: Number(e.target.value) })}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">
        Reservar
      </button>
    </form>
  );
}
