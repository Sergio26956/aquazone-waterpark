export default function SocialBar() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
      <a href="https://facebook.com" target="_blank" className="bg-blue-600 p-2 rounded-full text-white">FB</a>
      <a href="https://instagram.com" target="_blank" className="bg-pink-500 p-2 rounded-full text-white">IG</a>
      <a href="https://tiktok.com" target="_blank" className="bg-black p-2 rounded-full text-white">TT</a>
    </div>
  )
}
