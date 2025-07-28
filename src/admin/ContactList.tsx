'use client';

import { useEffect, useState } from 'react';

interface Contact {
  name: string;
  email: string;
  message: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/contacts');
    const data = await res.json();
    setContacts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (index: number) => {
    setLoading(true);
    await fetch('/api/admin/contacts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index }),
    });
    await fetchContacts();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Contactos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul className="space-y-4 max-h-[60vh] overflow-auto">
          {contacts.map((c, i) => (
            <li key={i} className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
              <p>
                <strong>Nombre:</strong> {c.name}
              </p>
              <p>
                <strong>Email:</strong> {c.email}
              </p>
              <p>
                <strong>Mensaje:</strong> {c.message}
              </p>
              <button
                onClick={() => deleteContact(i)}
                className="mt-2 text-red-500 font-semibold hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
