'use client';
import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    if (name.trim() && email.trim()) {
      setContacts([...contacts, { id: Date.now(), name, email, phone }]);
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Lista de Contactos</h3>
      <div className="flex flex-col gap-2 mb-4 max-w-md">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Teléfono (opcional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={addContact} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Añadir contacto
        </button>
      </div>
      <ul className="list-disc pl-6">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> — {contact.email} {contact.phone && `— ${contact.phone}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
