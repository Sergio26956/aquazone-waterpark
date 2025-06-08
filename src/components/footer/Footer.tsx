'use client';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">&copy; {new Date().getFullYear()} AQUAZONE. Todos los derechos reservados.</div>
        <div className="flex space-x-4 text-xl">
          <Link href="https://facebook.com" target="_blank"><FaFacebookF /></Link>
          <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
          <Link href="https://tiktok.com" target="_blank"><FaTiktok /></Link>
        </div>
      </div>
    </footer>
  );
}
