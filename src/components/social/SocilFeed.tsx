'use client';

import React from 'react';

const SocialFeed = () => {
  return (
    <div className="p-4 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Redes Sociales (Live)</h2>
      <div className="space-y-4">
        <iframe
          src="https://www.instagram.com/aquazone/embed"
          title="Instagram"
          width="100%"
          height="400"
          className="rounded"
        />
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/aquazone&tabs=timeline"
          title="Facebook"
          width="100%"
          height="400"
          className="rounded"
        />
        <iframe
          src="https://www.tiktok.com/embed/123456789"
          title="TikTok"
          width="100%"
          height="400"
          className="rounded"
        />
      </div>
    </div>
  );
};

export default SocialFeed;
