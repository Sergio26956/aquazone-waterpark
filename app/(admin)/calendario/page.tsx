"use client"
import { useState } from "react"
import { format } from "date-fns"

export default function CalendarPage() {
  const [selectedDates, setSelectedDates] = useState<string[]>([])

  const toggleDate = (date: string) => {
    setSelectedDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    )
  }

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calendario de Contrataciones</h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const date = `2025-07-${String(day).padStart(2, "0")}`
          const isSelected = selectedDates.includes(date)
          return (
            <button
              key={day}
              onClick={() => toggleDate(date)}
              className={`p-2 border rounded text-sm ${
                isSelected ? "bg-green-500 text-white" : "bg-white"
              }`}
            >
              {day}
            </button>
          )
        })}
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Fechas Reservadas:</h3>
        <ul className="list-disc pl-5">
          {selectedDates.map((date) => (
            <li key={date}>{format(new Date(date), "dd MMMM yyyy")}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
