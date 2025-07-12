'use client';
import { useState } from 'react';

type Reservation = {
  id: number;
  date: string;
  name: string;
  event: string;
  contact: string;
};

export default function Calendar() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [contact, setContact] = useState('');

  function addReservation() {
    if (!date || !name || !event || !contact) return;
    const newRes: Reservation = {
      id: Date.now(),
      date,
      name,
      event,
      contact,
    };
    setReservations((prev) => [...prev, newRes]);
    setDate(''); setName(''); setEvent(''); setContact('');
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Calendario de Reservas</h2>
      <div className="space-y-2 mb-4">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Evento" value={event} onChange={(e) => setEvent(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Contacto" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={addReservation} className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Añadir Reserva</button>
      </div>
      <ul className="max-h-60 overflow-auto border rounded p-2 space-y-1">
        {reservations.map((r) => (
          <li key={r.id} className="border-b pb-1">
            <strong>{r.date}</strong> - {r.name} - {r.event} - {r.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}
