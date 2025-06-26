'use client'
import { useEffect } from 'react'

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://www.powr.io/powr.js?platform=html')
    script.setAttribute('async', 'true')
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-center text-3xl font-bold text-blue-800 mb-6">Síguenos en Instagram</h2>
      <div className="max-w-4xl mx-auto">
        <div className="powr-instagram-feed" id="your-unique-id-here"></div>
      </div>
    </section>
  )
}
