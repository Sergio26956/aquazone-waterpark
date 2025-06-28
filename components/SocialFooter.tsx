"use client";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function SocialFooter() {
  return (
    <div className="flex justify-center gap-6 py-6 bg-neutral-900 text-white">
      <a href="https://instagram.com" target="_blank"><FaInstagram size={22} /></a>
      <a href="https://facebook.com" target="_blank"><FaFacebook size={22} /></a>
      <a href="https://tiktok.com" target="_blank"><FaTiktok size={22} /></a>
      <a href="https://youtube.com" target="_blank"><FaYoutube size={22} /></a>
    </div>
  );
}
