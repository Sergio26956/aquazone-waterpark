import { useState } from 'react';

export default function VisualAIAssistant() {
  const [suggestion, setSuggestion] = useState('');

  const getSuggestion = async () => {
    const res = await fetch('/api/visual-suggestion');
    const data = await res.json();
    setSuggestion(data.suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={getSuggestion}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        IA Sugerencia Visual
      </button>
      {suggestion && (
        <div className="mt-2 bg-white text-black p-4 rounded-xl shadow-xl max-w-sm">
          {suggestion}
        </div>
      )}
    </div>
  );
}
