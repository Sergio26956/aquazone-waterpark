"use client";
import { useEffect, useState } from "react";

export default function SocialFeed() {
  const [posts, setPosts] = useState([
    { platform: "Instagram", content: "💦 Nueva atracción en Málaga" },
    { platform: "Facebook", content: "🎉 Fiesta acuática este sábado" },
    { platform: "TikTok", content: "🔝 Top 3 saltos del mes" },
  ]);

  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-xl">
      <h2 className="text-white text-xl font-bold mb-4">🌐 Feed Redes Sociales</h2>
      <div className="space-y-3">
        {posts.map((post, idx) => (
          <div key={idx} className="p-3 bg-black/20 rounded-lg text-white">
            <strong>{post.platform}:</strong> {post.content}
          </div>
        ))}
      </div>
    </div>
  );
}
