'use client';
import { useState } from 'react';

export default function ContactList() {
  const [contacts, setContacts] = useState<{ name: string; email: string }[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addContact = () => {
    if (name && email) {
      setContacts([...contacts, { name, email }]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Agenda de Contactos</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <button onClick={addContact} className="bg-blue-600 text-white px-4 py-2 rounded">
          Añadir
        </button>
      </div>
      <ul className="list-disc pl-6">
        {contacts.map((c, i) => (
          <li key={i}>{c.name} - {c.email}</li>
        ))}
      </ul>
    </div>
  );
}
