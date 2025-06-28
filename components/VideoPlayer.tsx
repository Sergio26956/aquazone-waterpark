'use client'

interface Props {
  src: string
}

export default function VideoPlayer({ src }: Props) {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg">
      <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
    </div>
  )
}
