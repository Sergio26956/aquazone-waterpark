'use client';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="flex space-x-4 text-white text-2xl">
      <a href="https://facebook.com/aquazone" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com/aquazone" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://tiktok.com/@aquazone" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
    </div>
  );
}
