'use client';
import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const addContact = () => {
    if (form.name && form.email) {
      setContacts([...contacts, { id: Date.now(), ...form }]);
      setForm({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Lista de Contactos</h3>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded w-full"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 rounded w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="border p-2 rounded w-full"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={addContact}
        >
          Añadir Contacto
        </button>
      </div>

      <ul className="divide-y divide-gray-300">
        {contacts.map(({ id, name, email, phone }) => (
          <li key={id} className="py-2">
            <strong>{name}</strong> — {email} — {phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
