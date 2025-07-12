'use client';
import { useState } from 'react';

export default function SocialVisualGenerator() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateVisual = async () => {
    setLoading(true);
    try {
      // Simulación de una generación visual (IA real se puede conectar luego)
      const fakeImage = 'https://source.unsplash.com/featured/?waterpark,' + Date.now();
      setTimeout(() => {
        setImageUrl(fakeImage);
        setLoading(false);
      }, 1200);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow mt-8 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🎨 Generador de Contenido para Redes Sociales</h2>
      <textarea
        placeholder="Describe tu publicación o idea (ej: promoción, evento, parque...)"
        className="w-full border p-2 rounded mb-4"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={generateVisual}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generar Imagen
      </button>

      {loading && <p className="mt-4 text-sm text-gray-500">Generando imagen...</p>}

      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Generado" className="rounded shadow" />
          <p className="text-sm mt-2 text-gray-700">📥 Puedes guardar esta imagen y usarla en tus redes</p>
        </div>
      )}
    </div>
  );
}
