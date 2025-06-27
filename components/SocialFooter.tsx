'use client'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function SocialFooter() {
  return (
    <footer className="w-full py-6 flex justify-center items-center gap-6 bg-gray-100 text-gray-700">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </footer>
  )
}
