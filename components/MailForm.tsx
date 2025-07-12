'use client';
import { useState } from 'react';

export default function MailForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert(`✉️ Mensaje enviado:\nAsunto: ${subject}\n${message}`);
    setSubject('');
    setMessage('');
  };

  return (
    <div className="p-4 bg-white rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-2">Enviar Mailing</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Mensaje"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </div>
  );
}
