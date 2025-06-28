'use client'

import React from 'react'

export default function SocialFooter() {
  return (
    <footer className="w-full bg-black bg-opacity-70 text-white text-center py-4 absolute bottom-0 z-40">
      <p className="text-sm">
        © {new Date().getFullYear()} AQUAZONE Water Park · Todos los derechos reservados
      </p>
    </footer>
  )
}
