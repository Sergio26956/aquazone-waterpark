'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

type MediaItem = {
  _id: string;
  public_id: string;
  secure_url: string;
  resource_type: string;
  format: string;
};

export default function Gallery() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await axios.get('/api/media');
        setMedia(res.data.resources);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar galería:', err);
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  return (
    <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <p className="text-center w-full">Cargando galería...</p>
      ) : (
        media.map((item) => (
          <div key={item._id} className="rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
            {item.resource_type === 'image' && (
              <Image
                src={item.secure_url}
                alt={item.public_id}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            )}
            {item.resource_type === 'video' && (
              <video controls className="w-full h-64 object-cover">
                <source src={item.secure_url} type={`video/${item.format}`} />
              </video>
            )}
          </div>
        ))
      )}
    </section>
  );
}
