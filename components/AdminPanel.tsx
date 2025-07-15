'use client';
import { useState } from 'react';
import Calendar from './Calendar';
import CampaignManager from './CampaingManager';
import BudgetManager from './Presupuestos';
import ContactList from './ContactList';
import SocialVisualGenerator from './SocialVisualGenerator'; // NUEVO

export default function AdminPanel() {
  const [section, setSection] = useState('calendar');

  return (
    <div className="p-6 space-y-6">
      <nav className="flex gap-4 flex-wrap">
        <button onClick={() => setSection('calendar')} className="btn">Calendario</button>
        <button onClick={() => setSection('contacts')} className="btn">Contactos</button>
        <button onClick={() => setSection('campaigns')} className="btn">Campañas</button>
        <button onClick={() => setSection('budgets')} className="btn">Presupuestos</button>
        <button onClick={() => setSection('visual')} className="btn">Visual IA</button> {/* NUEVO */}
      </nav>

      {section === 'calendar' && <Calendar />}
      {section === 'contacts' && <ContactList />}
      {section === 'campaigns' && <CampaignManager />}
      {section === 'budgets' && <BudgetManager />}
      {section === 'visual' && <SocialVisualGenerator />} {/* NUEVO */}
    </div>
  );
}
