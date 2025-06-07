'use client';
import { useState } from 'react';

export default function LiveChatSupport() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, `Soporte: ${input}`]);
      setInput('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Chat en Vivo de Soporte</h2>
      <div className="border p-4 h-64 overflow-y-scroll bg-white mb-3">
        {messages.map((m, i) => (
          <div key={i} className="text-sm text-gray-800 mb-2">{m}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
