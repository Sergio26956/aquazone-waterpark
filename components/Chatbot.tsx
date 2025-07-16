'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = `🧑: ${input}`;
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    const aiResponse = `🤖: ${data.response}`;
    setMessages((prev) => [...prev, aiResponse]);
  };

  return (
    <div className="p-4 max-w-lg mx-auto space-y-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Asistente AI</h2>
      <div className="h-64 overflow-y-auto border p-2 rounded bg-gray-100">
        {messages.map((msg, i) => (
          <div key={i} className="mb-1">{msg}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </div>
    </div>
  );
}
