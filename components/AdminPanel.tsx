'use client';
import { useState } from 'react';
import Calendar from './Calendar';
import ContactManager from './ContactManager';
import BudgetManager from './BudgetManager';
import AccountingPanel from './AccountingPanel';
import CampaignManager from './CampaingManager';

export default function AdminPanel() {
  const [view, setView] = useState<'calendar' | 'contacts' | 'budget' | 'accounting' | 'campaigns'>('calendar');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Panel Administrativo AQUAZONE</h1>
      <nav className="flex justify-center gap-2 flex-wrap">
        <button onClick={() => setView('calendar')} className="btn">📅 Calendario</button>
        <button onClick={() => setView('contacts')} className="btn">👤 Contactos</button>
        <button onClick={() => setView('budget')} className="btn">📝 Presupuestos</button>
        <button onClick={() => setView('accounting')} className="btn">💰 Contabilidad</button>
        <button onClick={() => setView('campaigns')} className="btn">📢 Campañas</button>
      </nav>

      <div>
        {view === 'calendar' && <Calendar />}
        {view === 'contacts' && <ContactManager />}
        {view === 'budget' && <BudgetManager />}
        {view === 'accounting' && <AccountingPanel />}
        {view === 'campaigns' && <CampaignManager />}
      </div>
    </div>
  );
}
