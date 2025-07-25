"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type BookingEntry = {
  id: number;
  date: string;
  name: string;
  phone: string;
  email: string;
  eventType: string;
};

export default function BookingList() {
  const [bookings, setBookings] = useState<BookingEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookingEntries");
    if (stored) setBookings(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookingEntries", JSON.stringify(bookings));
  }, [bookings]);

  const deleteBooking = (id: number) => {
    setBookings((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {bookings.length === 0 ? (
        <p className="text-muted-foreground">No hay reservas registradas.</p>
      ) : (
        bookings.map((entry) => (
          <Card key={entry.id} className="relative group">
            <CardHeader className="text-lg font-semibold">
              {entry.name} — {entry.email}
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Fecha:</strong> {entry.date}</p>
              <p><strong>Teléfono:</strong> {entry.phone}</p>
              <p><strong>Tipo de evento:</strong> {entry.eventType}</p>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => deleteBooking(entry.id)}
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
