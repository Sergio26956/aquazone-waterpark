'use client';
import { useState } from 'react';

export default function CampaignManager() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    // Aquí iría integración real con API mailing
    alert(`Campaña enviada:\nAsunto: ${subject}\nContenido: ${body}`);
    setSubject('');
    setBody('');
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Gestor de Campañas</h3>
      <input
        type="text"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Contenido del mensaje"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 mb-4 border rounded h-32"
      />
      <button onClick={handleSend} className="bg-green-600 text-white px-4 py-2 rounded">
        Enviar Campaña
      </button>
    </div>
  );
}
