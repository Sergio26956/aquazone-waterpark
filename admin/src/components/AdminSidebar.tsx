import React from 'react';
import { Calendar, Users, Image } from 'lucide-react';

const AdminSidebar: React.FC<{ active: string, setActive: (val: string) => void }> = ({ active, setActive }) => {
  const items = [
    { name: 'Usuarios', icon: <Users />, key: 'usuarios' },
    { name: 'Calendario', icon: <Calendar />, key: 'calendario' },
    { name: 'Galería', icon: <Image />, key: 'galeria' },
  ];

  return (
    <aside className="w-64 bg-blue-950 text-white rounded-r-3xl p-5 shadow-2xl h-full animate-fade-in-left">
      <ul className="space-y-4">
        {items.map(({ name, icon, key }) => (
          <li
            key={key}
            onClick={() => setActive(key)}
            className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition ${
              active === key ? 'bg-cyan-700' : 'hover:bg-blue-700'
            }`}
          >
            {icon}
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
