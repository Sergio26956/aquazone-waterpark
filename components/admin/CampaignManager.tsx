import React, { useState } from 'react';

const CampaignManager: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState('');

  const generateContent = () => {
    setPreview(`Campaña IA generada con el asunto: "${subject}" y contenido: "${message}"`);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Campañas y Mailing Automático (IA)</h2>
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Asunto del Email"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="w-full mb-2 p-2 border rounded"
        placeholder="Mensaje de la campaña"
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={generateContent}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generar Campaña IA
      </button>

      {preview && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h3 className="font-bold mb-2">Vista previa:</h3>
          <p>{preview}</p>
        </div>
      )}
    </div>
  );
};

export default CampaignManager;
