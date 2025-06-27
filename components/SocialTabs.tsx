'use client'
export default function SocialTabs() {
  return (
    <div className="fixed left-4 bottom-24 flex flex-col gap-3 z-50">
      <a href="https://www.facebook.com" target="_blank" className="bg-blue-600 text-white px-3 py-2 rounded shadow">
        Facebook
      </a>
      <a href="https://www.instagram.com" target="_blank" className="bg-pink-500 text-white px-3 py-2 rounded shadow">
        Instagram
      </a>
    </div>
  )
}
