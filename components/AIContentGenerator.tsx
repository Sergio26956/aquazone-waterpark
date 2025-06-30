'use client'

import { useState } from 'react'

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')

  const generate = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    })

    const { content } = await res.json()
    setResult(content)
  }

  return (
    <div className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold">Generador de Contenido IA</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Escribe una idea, tema o concepto..."
        className="w-full border p-3 rounded-md"
      />
      <button
        onClick={generate}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Generar
      </button>
      {result && (
        <div className="mt-4 p-4 border bg-gray-50 rounded-md">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}
