'use client';
import { useState } from 'react';

export default function NewsletterDashboard() {
  const [emails, setEmails] = useState<string[]>([]);
  const [email, setEmail] = useState('');

  const addEmail = () => {
    if (email && !emails.includes(email)) {
      setEmails([...emails, email]);
      setEmail('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Suscriptores del Newsletter</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce un email"
          className="p-2 border rounded w-full"
        />
        <button onClick={addEmail} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Añadir
        </button>
      </div>
      <ul className="space-y-1">
        {emails.map((e, i) => (
          <li key={i} className="text-sm bg-gray-100 p-2 rounded">{e}</li>
        ))}
      </ul>
    </div>
  );
}
