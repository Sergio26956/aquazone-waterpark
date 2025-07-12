'use client';
import { useState } from 'react';
import AdminLogin from '@/components/AdminLogin';
import AdminPanel from '@/components/AdminPanel';

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {!loggedIn ? <AdminLogin onLogin={() => setLoggedIn(true)} /> : <AdminPanel />}
    </div>
  );
}
