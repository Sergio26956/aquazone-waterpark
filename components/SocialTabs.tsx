'use client';
import { useState } from 'react';

export default function SocialTabs() {
  const [active, setActive] = useState('instagram');

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <div className="flex gap-4 mb-4">
        <button onClick={() => setActive('instagram')} className="btn">Instagram</button>
        <button onClick={() => setActive('facebook')} className="btn">Facebook</button>
        <button onClick={() => setActive('tiktok')} className="btn">TikTok</button>
      </div>

      {active === 'instagram' && (
        <iframe
          src="https://www.instagram.com/aquazonewaterpark/embed"
          className="w-full h-80 border"
        />
      )}
      {active === 'facebook' && (
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faquazonewaterpark&tabs=timeline&width=500&height=400"
          className="w-full h-80 border"
        />
      )}
      {active === 'tiktok' && (
        <div className="text-center p-8 text-gray-600">🔗 TikTok API coming soon…</div>
      )}
    </div>
  );
}
