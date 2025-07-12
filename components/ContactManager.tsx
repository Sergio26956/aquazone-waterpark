'use client';
import { useState } from 'react';

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function addContact() {
    if (!name || !email || !phone) return;
    const newContact: Contact = { id: Date.now(), name, email, phone };
    setContacts((prev) => [...prev, newContact]);
    setName(''); setEmail(''); setPhone('');
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Gestor de Contactos</h2>
      <div className="space-y-2 mb-4">
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
        <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={addContact} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Añadir Contacto</button>
      </div>
      <ul className="max-h-60 overflow-auto border rounded p-2">
        {contacts.map((c) => (
          <li key={c.id} className="border-b py-2">
            <strong>{c.name}</strong><br />
            {c.email} • {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
