'use client';
import { useState } from 'react';

export default function ContactList() {
  const [contacts, setContacts] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addContact = () => {
    if (input.trim() && input.includes('@')) {
      setContacts([...contacts, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Agenda de Contactos</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addContact} className="bg-blue-600 text-white px-4 py-2 rounded">
          Añadir
        </button>
      </div>
      <ul className="list-disc pl-6">
        {contacts.map((email, idx) => (<li key={idx}>{email}</li>))}
      </ul>
    </div>
  );
}
