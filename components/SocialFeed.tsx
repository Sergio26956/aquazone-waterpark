import React from 'react';

const SocialFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-2xl shadow-xl">
      {/* Facebook */}
      <div className="w-full">
        <h3 className="text-xl font-bold mb-2 text-center">Facebook</h3>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/TU_PAGINA"
          width="100%"
          height="400"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          allow="encrypted-media"
        ></iframe>
      </div>

      {/* Instagram */}
      <div className="w-full">
        <h3 className="text-xl font-bold mb-2 text-center">Instagram</h3>
        <iframe
          src="https://www.instagram.com/TU_USUARIO/embed/"
          width="100%"
          height="400"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        ></iframe>
      </div>

      {/* TikTok */}
      <div className="w-full">
        <h3 className="text-xl font-bold mb-2 text-center">TikTok</h3>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@TU_USUARIO"
          data-unique-id="TU_USUARIO"
          style={{ width: '100%', height: '400px' }}
        >
          <section>Loading TikTok...</section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
    </div>
  );
};

export default SocialFeed;
