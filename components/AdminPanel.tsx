'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Calendar from './Calendar';
import CampaignManager from './CampaingManager';
import BudgetManager from './Presupuestos';
import ContactList from './ContactList';

export default function AdminPanel() {
  const [section, setSection] = useState('calendar');
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      router.push('/admin-login');
    }
  }, [router]);

  return (
    <div className="p-6 space-y-6">
      <nav className="flex gap-4 mb-6">
        <button
          onClick={() => setSection('calendar')}
          className={`btn ${section === 'calendar' ? 'bg-blue-600 text-white' : ''}`}
        >
          Calendario
        </button>
        <button
          onClick={() => setSection('contacts')}
          className={`btn ${section === 'contacts' ? 'bg-blue-600 text-white' : ''}`}
        >
          Contactos
        </button>
        <button
          onClick={() => setSection('campaigns')}
          className={`btn ${section === 'campaigns' ? 'bg-blue-600 text-white' : ''}`}
        >
          Campañas
        </button>
        <button
          onClick={() => setSection('budgets')}
          className={`btn ${section === 'budgets' ? 'bg-blue-600 text-white' : ''}`}
        >
          Presupuestos
        </button>
      </nav>

      {section === 'calendar' && <Calendar />}
      {section === 'contacts' && <ContactList />}
      {section === 'campaigns' && <CampaignManager />}
      {section === 'budgets' && <BudgetManager />}
    </div>
  );
}
