'use client'

import { useRouter } from 'next/navigation'

export const MainButtons = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 my-10 px-4">
      <button
        className="bg-blue-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
        onClick={() => router.push('/flotantes')}
      >
        Parques Acuáticos Flotantes
      </button>
      <button
        className="bg-green-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-green-700 transition"
        onClick={() => router.push('/terrestres')}
      >
        Parques Acuáticos Terrestres
      </button>
    </div>
  )
}
