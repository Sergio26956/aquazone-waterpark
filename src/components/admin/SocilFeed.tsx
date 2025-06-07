'use client';

import React from 'react';

const SocialFeed = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Redes Sociales</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <iframe
          src="https://www.instagram.com"
          className="w-full h-96"
          title="Instagram"
        ></iframe>
        <iframe
          src="https://www.facebook.com"
          className="w-full h-96"
          title="Facebook"
        ></iframe>
        <iframe
          src="https://www.tiktok.com"
          className="w-full h-96"
          title="TikTok"
        ></iframe>
      </div>
    </div>
  );
};

export default SocialFeed;
