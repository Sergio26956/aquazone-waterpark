"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type ContactEntry = {
  id: number;
  name: string;
  email: string;
  message: string;
};

export default function ContactList() {
  const [contacts, setContacts] = useState<ContactEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("contactEntries");
    if (stored) setContacts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("contactEntries", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {contacts.length === 0 ? (
        <p className="text-muted-foreground">No hay mensajes recibidos.</p>
      ) : (
        contacts.map((entry) => (
          <Card key={entry.id} className="relative group">
            <CardHeader className="text-lg font-semibold">
              {entry.name} — {entry.email}
            </CardHeader>
            <CardContent>
              <p>{entry.message}</p>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteContact(entry.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
