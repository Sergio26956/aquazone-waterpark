'use client';
import { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu comentario');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Envíanos tu Opinión</h2>
      <textarea
        required
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Escribe aquí tu comentario"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Enviar Opinión
      </button>
    </form>
  );
}
