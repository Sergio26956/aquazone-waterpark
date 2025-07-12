'use client';
import { useEffect, useState } from 'react';

export default function SocialFeed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // Reemplaza por tu API real o scraping autorizado
    fetch('/api/social-feed')
      .then(res => res.json())
      .then(data => setFeed(data.posts || []));
  }, []);

  return (
    <section className="bg-gray-100 p-6 rounded-xl shadow-lg mt-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Últimas Publicaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {feed.map((post, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow-md">
            <p className="text-sm">{post.content}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm block mt-2">
              Ver publicación →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
