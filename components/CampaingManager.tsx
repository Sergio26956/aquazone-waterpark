'use client';
import { useState } from 'react';

export default function CampaignManager() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendCampaign = async () => {
    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({ subject, message }),
    });

    if (res.ok) {
      setStatus('✅ Enviado correctamente');
    } else {
      setStatus('❌ Error al enviar');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Campaña de Mailing</h3>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Asunto"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={6}
        placeholder="Mensaje de la campaña"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendCampaign} className="bg-green-600 text-white px-4 py-2 rounded">
        Enviar Campaña
      </button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}
