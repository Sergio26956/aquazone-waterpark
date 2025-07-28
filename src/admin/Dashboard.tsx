'use client';

import { useState } from 'react';
import AdminNav from './AdminNav';

export default function Dashboard() {
  const [section, setSection] = useState<'calendar' | 'contacts' | 'campaigns' | 'budgets'>('calendar');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white p-8">
      <AdminNav current={section} onChange={setSection} />
      <section className="mt-8 bg-white bg-opacity-10 rounded-xl p-6 shadow-lg backdrop-blur-md min-h-[60vh]">
        {section === 'calendar' && <Calendar />}
        {section === 'contacts' && <ContactList />}
        {section === 'campaigns' && <CampaignManager />}
        {section === 'budgets' && <BudgetManager />}
      </section>
    </main>
  );
}
