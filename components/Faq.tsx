'use client'
import { useState } from 'react'

const faqs = [
  { q: '¿Qué es AQUAZONE?', a: 'Una empresa líder en parques acuáticos flotantes y urbanos.' },
  { q: '¿Dónde se instalan?', a: 'En playas, piscinas, plazas y espacios públicos grandes.' },
  { q: '¿Son seguros?', a: 'Sí, todos cumplen normativa europea y están supervisados por socorristas.' },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="p-4 space-y-4">
      {faqs.map((item, i) => (
        <div key={i} className="border rounded p-4 shadow">
          <button onClick={() => setOpenIndex(i === openIndex ? null : i)} className="text-left w-full font-semibold">
            {item.q}
          </button>
          {openIndex === i && <p className="mt-2 text-sm">{item.a}</p>}
        </div>
      ))}
    </div>
  )
}
