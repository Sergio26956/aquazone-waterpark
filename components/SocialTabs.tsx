'use client'

import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export default function SocialTabs() {
  return (
    <div className="fixed left-4 top-1/3 z-50 flex flex-col space-y-3">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white text-2xl hover:text-pink-500 transition" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-white text-2xl hover:text-blue-500 transition" />
      </a>
      <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-white text-2xl hover:text-green-500 transition" />
      </a>
    </div>
  )
}
