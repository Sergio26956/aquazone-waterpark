'use client';
import { useEffect, useState } from 'react';

interface Post {
  id: string;
  image: string;
  caption: string;
  url: string;
}

export default function SocialFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulación de fetch de datos reales
    setTimeout(() => {
      setPosts([
        {
          id: '1',
          image: '/images/instagram-demo1.jpg',
          caption: '¡Prepárate para la temporada!',
          url: 'https://instagram.com/aquazone',
        },
        {
          id: '2',
          image: '/images/instagram-demo2.jpg',
          caption: 'Nuevo parque flotante activado 🌊',
          url: 'https://facebook.com/aquazone',
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Síguenos en redes sociales</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="group relative">
            <img src={post.image} alt={post.caption} className="rounded shadow-lg w-full h-60 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition">
              {post.caption}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
