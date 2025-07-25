'use client';
import { useState } from 'react';

export default function ContactList() {
  const [contacts, setContacts] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addContact = () => {
    if (input.trim()) {
      setContacts([...contacts, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Lista de Contactos</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Nuevo contacto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addContact} className="bg-purple-600 text-white px-4 py-2 rounded">
          Añadir
        </button>
      </div>
      <ul className="list-disc pl-6">
        {contacts.map((contact, idx) => (
          <li key={idx}>{contact}</li>
        ))}
      </ul>
    </div>
  );
}
