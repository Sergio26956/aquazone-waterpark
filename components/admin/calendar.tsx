"use client"

import { useState } from "react"

export function AdminCalendar() {
  const [selectedDate, setSelectedDate] = useState("")
  const [reservas, setReservas] = useState<string[]>([])

  const handleAddReserva = () => {
    if (selectedDate && !reservas.includes(selectedDate)) {
      setReservas([...reservas, selectedDate])
      setSelectedDate("")
    }
  }

  return (
    <div className="mt-10 border p-6 rounded-xl bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Calendario de Reservas</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddReserva}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Añadir
        </button>
      </div>
      <ul className="list-disc ml-6 text-gray-700">
        {reservas.map((fecha, idx) => (
          <li key={idx}>{fecha}</li>
        ))}
      </ul>
    </div>
  )
}
