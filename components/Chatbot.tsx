'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, `🧍: ${userMessage}`]);
    setInput('');

    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `🤖: ${data.response || 'Error de IA'}`]);
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Chatbot IA AQUAZONE</h2>
      <div className="space-y-2 max-h-64 overflow-y-auto border p-2 mb-4 rounded">
        {messages.map((msg, idx) => (<p key={idx} className="text-sm">{msg}</p>))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input type="text" placeholder="Escribe tu pregunta..." value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </div>
  );
}
