'use client'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function SocialTabs() {
  return (
    <div className="flex justify-center gap-4 p-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} className="hover:text-blue-600 transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} className="hover:text-pink-500 transition" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} className="hover:text-blue-400 transition" />
      </a>
    </div>
  )
}
