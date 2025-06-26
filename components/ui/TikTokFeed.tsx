'use client'
import { useEffect } from 'react'

export default function TikTokFeed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">Lo último en TikTok</h2>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@aqua.zone"
        data-unique-id="aqua.zone"
        style={{ maxWidth: '605px', margin: '0 auto' }}
      >
        <section></section>
      </blockquote>
    </section>
  )
}
