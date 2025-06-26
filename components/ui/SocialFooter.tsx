'use client'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function SocialFooter() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} AQUAZONE. Todos los derechos reservados.</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://www.facebook.com/AquaZoneOficial" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/aqua.zone" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@aqua.zone" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  )
}
