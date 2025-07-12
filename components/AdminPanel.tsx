'use client';
import { useState } from 'react';
import Calendar from './Calendar';

export default function AdminPanel() {
  const [view, setView] = useState<'calendar' | 'contacts' | 'budget' | 'accounting'>('calendar');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-3xl font-bold text-center">Panel Administrativo AQUAZONE</h1>
      <nav className="flex justify-center gap-4">
        <button onClick={() => setView('calendar')} className="btn">Calendario</button>
        <button onClick={() => setView('contacts')} className="btn">Contactos</button>
        <button onClick={() => setView('budget')} className="btn">Presupuestos</button>
        <button onClick={() => setView('accounting')} className="btn">Contabilidad</button>
      </nav>

      <section>
        {view === 'calendar' && <Calendar />}
        {view === 'contacts' && <p>Zona contactos (pendiente creación)</p>}
        {view === 'budget' && <p>Gestión presupuestos (pendiente creación)</p>}
        {view === 'accounting' && <p>Contabilidad básica (pendiente creación)</p>}
      </section>
    </div>
  );
}
