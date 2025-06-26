'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const FacebookFeed = dynamic(() => import('./FacebookFeed'), { ssr: false })
const InstagramFeed = dynamic(() => import('./InstagramFeed'), { ssr: false })
const TikTokFeed = dynamic(() => import('./TikTokFeed'), { ssr: false })

export default function SocialTabs() {
  const [tab, setTab] = useState<'facebook' | 'instagram' | 'tiktok'>('instagram')

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-center text-4xl font-bold text-blue-800 mb-8">Nuestras Redes Sociales</h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setTab('instagram')}
          className={`px-6 py-2 rounded-full border ${
            tab === 'instagram' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Instagram
        </button>
        <button
          onClick={() => setTab('tiktok')}
          className={`px-6 py-2 rounded-full border ${
            tab === 'tiktok' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          TikTok
        </button>
        <button
          onClick={() => setTab('facebook')}
          className={`px-6 py-2 rounded-full border ${
            tab === 'facebook' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Facebook
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        {tab === 'instagram' && <InstagramFeed />}
        {tab === 'tiktok' && <TikTokFeed />}
        {tab === 'facebook' && <FacebookFeed />}
      </div>
    </section>
  )
}
