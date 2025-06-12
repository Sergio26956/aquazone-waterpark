import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function SocialBar() {
  return (
    <div className="flex gap-4 justify-center py-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-blue-600 text-xl hover:scale-110 transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 text-xl hover:scale-110 transition" />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="text-black text-xl hover:scale-110 transition" />
      </a>
    </div>
  );
}
