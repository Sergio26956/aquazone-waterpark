'use client';

export default function SocialBar() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a href="https://facebook.com/aquazone" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.svg" alt="Facebook" className="w-10 h-10 hover:scale-110 transition" />
      </a>
      <a href="https://instagram.com/aquazone" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.svg" alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
      </a>
      <a href="https://youtube.com/@aquazone" target="_blank" rel="noopener noreferrer">
        <img src="/icons/youtube.svg" alt="YouTube" className="w-10 h-10 hover:scale-110 transition" />
      </a>
    </div>
  );
}
