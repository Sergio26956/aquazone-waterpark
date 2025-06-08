'use client';
export default function TikTokEmbed() {
  return (
    <div className="p-4">
      <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@aquazone" data-unique-id="aquazone" style={{ maxWidth: 325 }}>
        <section>
          <a target="_blank" href="https://www.tiktok.com/@aquazone">@aquazone</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
}
