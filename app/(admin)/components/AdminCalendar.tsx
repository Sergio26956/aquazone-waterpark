'use client';

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function AdminCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Calendario de eventos</h2>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </div>
  );
}
