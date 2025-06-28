"use client";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function SocialTabs() {
  return (
    <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 flex flex-col gap-2 p-2">
      <a href="https://instagram.com" target="_blank">
        <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" size={28} />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FaFacebook className="text-blue-600 hover:scale-110 transition-transform" size={28} />
      </a>
      <a href="https://tiktok.com" target="_blank">
        <FaTiktok className="text-black hover:scale-110 transition-transform" size={28} />
      </a>
      <a href="https://youtube.com" target="_blank">
        <FaYoutube className="text-red-600 hover:scale-110 transition-transform" size={28} />
      </a>
    </div>
  );
}
