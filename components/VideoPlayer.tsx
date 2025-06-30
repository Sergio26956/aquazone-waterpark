'use client'

interface Props {
  src: string
}

export default function VideoPlayer({ src }: Props) {
  return (
    <video
      src={src}
      autoPlay
      controls
      className="max-w-full max-h-[90vh] rounded-xl shadow-xl"
    />
  )
}
