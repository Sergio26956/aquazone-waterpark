import { useState } from 'react';
import axios from 'axios';

export default function IAGenerator() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    const res = await axios.post('/api/ai/generate', { prompt });
    setResult(res.data.result);
  };

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <input
        className="w-full p-2 border"
        placeholder="Escribe una idea para generar contenido..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Generar
      </button>
      {result && <p className="mt-4 p-2 bg-gray-100 rounded">{result}</p>}
    </div>
  );
}
