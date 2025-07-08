'use client';
import { useEffect, useState } from 'react';

const GaleriaAdmin = () => {
  const [imagenes, setImagenes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/galeria');
        const data = await res.json();
        setImagenes(data.urls || []);
      } catch {
        alert('Error al cargar galería');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Galería de Medios</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagenes.map((src, i) => (
            <div key={i} className="rounded overflow-hidden shadow">
              {src.includes('video') ? (
                <video src={src} controls className="w-full h-48 object-cover" />
              ) : (
                <img src={src} alt="media" className="w-full h-48 object-cover" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GaleriaAdmin;
