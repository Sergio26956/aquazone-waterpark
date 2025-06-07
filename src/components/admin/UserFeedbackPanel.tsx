'use client';
import { useState } from 'react';

export default function UserFeedbackPanel() {
  const [feedbacks, setFeedbacks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const submitFeedback = () => {
    if (input) {
      setFeedbacks([...feedbacks, input]);
      setInput('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Sugerencias y Opiniones</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Deja tu opinión..."
        className="w-full p-2 border rounded mb-2"
      />
      <button onClick={submitFeedback} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Enviar
      </button>
      <ul className="mt-4 space-y-2">
        {feedbacks.map((f, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded">{f}</li>
        ))}
      </ul>
    </div>
  );
}
