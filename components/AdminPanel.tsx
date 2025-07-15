'use client';
import { useState } from 'react';
import Calendar from './Calendar';
import ContactList from './ContactList';
import CampaignManager from './CampaignManager';
import BudgetManager from './BudgetManager';

export default function AdminPanel() {
  const [section, setSection] = useState<'calendar' | 'contacts' | 'campaigns' | 'budgets'>('calendar');

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <nav className="flex gap-4 mb-6">
        <button
          className={`btn ${section === 'calendar' ? 'btn-active' : ''}`}
          onClick={() => setSection('calendar')}
        >
          Calendario
        </button>
        <button
          className={`btn ${section === 'contacts' ? 'btn-active' : ''}`}
          onClick={() => setSection('contacts')}
        >
          Contactos
        </button>
        <button
          className={`btn ${section === 'campaigns' ? 'btn-active' : ''}`}
          onClick={() => setSection('campaigns')}
        >
          Campañas
        </button>
        <button
          className={`btn ${section === 'budgets' ? 'btn-active' : ''}`}
          onClick={() => setSection('budgets')}
        >
          Presupuestos
        </button>
      </nav>

      <section>
        {section === 'calendar' && <Calendar />}
        {section === 'contacts' && <ContactList />}
        {section === 'campaigns' && <CampaignManager />}
        {section === 'budgets' && <BudgetManager />}
      </section>
    </div>
  );
}
