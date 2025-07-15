'use client';
import { useState } from 'react';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default function SocialVisualGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await openai.images.generate({
        prompt,
        model: 'dall-e-3',
        n: 1,
        size: '1024x1024'
      });
      setImageUrl(res.data[0].url);
    } catch (err) {
      alert('Error al generar imagen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center space-y-4 bg-white/80 rounded-xl shadow-xl backdrop-blur">
      <h2 className="text-2xl font-bold">Generador Visual IA</h2>
      <p className="text-gray-700 text-sm">Describe lo que quieres generar para carteles, redes o vídeos publicitarios</p>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ej: Parque acuático futurista flotante con niños felices"
        className="w-full p-3 rounded border shadow"
      />
      <button
        onClick={generateImage}
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        {loading ? 'Generando...' : 'Crear Imagen'}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Generado" className="rounded shadow-lg mx-auto" />
          <p className="text-xs mt-2 text-gray-600">Puedes descargarla o usarla en tu campaña</p>
        </div>
      )}
    </div>
  );
}
