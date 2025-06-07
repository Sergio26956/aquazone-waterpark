'use client';

import React from 'react';

const SocialFeed = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Redes Sociales</h3>
      <div className="grid gap-4">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/AQUAZONE"
          width="100%"
          height="300"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          src="https://www.instagram.com/aquazone/embed"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          allowTransparency
        ></iframe>

        <iframe
          src="https://www.tiktok.com/embed"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SocialFeed;
