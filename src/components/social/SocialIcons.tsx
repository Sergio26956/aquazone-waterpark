import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex gap-4 text-2xl text-white">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
    </div>
  );
}
