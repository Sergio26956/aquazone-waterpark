"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/admin/common/Title";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
  const [events, setEvents] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = "Calendario de Reservas | AQUAZONE 2030";
  }, []);

  const addEvent = () => {
    if (input.trim()) {
      setEvents([...events, input.trim()]);
      setInput("");
    }
  };

  const removeEvent = (index: number) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title text="Calendario de Reservas" />
      <div className="mt-6 max-w-xl mx-auto">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Añadir nueva fecha o evento"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <Button onClick={addEvent} disabled={!input.trim()}>
            Añadir
          </Button>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          {events.map((event, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{event}</span>
              <button
                onClick={() => removeEvent(idx)}
                className="text-red-600 hover:text-red-800 font-bold"
                aria-label="Eliminar evento"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
