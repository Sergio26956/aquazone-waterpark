'use client';
import { useState } from 'react';

const feeds = {
  Instagram: 'https://instagram.com/aquazone',
  Facebook: 'https://facebook.com/aquazone',
  YouTube: 'https://youtube.com/@aquazone',
};

export default function SocialTabs() {
  const [active, setActive] = useState('Instagram');

  return (
    <section className="bg-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Redes Sociales en Vivo</h2>
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(feeds).map((platform) => (
          <button
            key={platform}
            onClick={() => setActive(platform)}
            className={`px-4 py-2 rounded ${
              active === platform ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {platform}
          </button>
        ))}
      </div>
      <div className="w-full aspect-video border rounded shadow">
        <iframe
          src={feeds[active]}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </section>
  );
}
