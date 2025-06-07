'use client';
import { useState } from 'react';

const notifications = [
  { id: 1, title: 'Nueva campaña disponible', time: 'hace 2 horas' },
  { id: 2, title: 'Editor actualizado', time: 'hace 1 día' },
];

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        🔔
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-md p-4 z-10">
          <h4 className="text-sm font-semibold mb-2">Notificaciones</h4>
          <ul>
            {notifications.map((n) => (
              <li key={n.id} className="text-sm mb-1">
                <p>{n.title}</p>
                <span className="text-xs text-gray-500">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
