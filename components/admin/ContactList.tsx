'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  phone?: string;
};

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('contacts');
    if (stored) setContacts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {contacts.length === 0 ? (
        <p className="text-muted-foreground">No hay mensajes recibidos.</p>
      ) : (
        contacts.map((contact) => (
          <Card key={contact.id} className="relative group">
            <CardHeader className="text-lg font-semibold">{contact.name}</CardHeader>
            <CardContent>
              <p><strong>Email:</strong> {contact.email}</p>
              {contact.phone && <p><strong>Teléfono:</strong> {contact.phone}</p>}
              <p><strong>Mensaje:</strong> {contact.message}</p>
            </CardContent>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="destructive"
                onClick={() => deleteContact(contact.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
