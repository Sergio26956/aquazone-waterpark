'use client';

interface AdminNavProps {
  current: string;
  onChange: (section: 'calendar' | 'contacts' | 'campaigns' | 'budgets') => void;
}

export default function AdminNav({ current, onChange }: AdminNavProps) {
  const navItems = [
    { id: 'calendar', label: 'Calendario' },
    { id: 'contacts', label: 'Contactos' },
    { id: 'campaigns', label: 'Campañas' },
    { id: 'budgets', label: 'Presupuestos' },
  ];

  return (
    <nav className="flex gap-6 justify-center">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          className={`py-2 px-6 rounded-lg font-semibold transition ${
            current === id ? 'bg-cyan-500 shadow-lg' : 'hover:bg-cyan-600 bg-cyan-400/50'
          }`}
          onClick={() => onChange(id as any)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
