type Props = {
  name: string
  comment: string
  location?: string
}

export default function TestimonialCard({ name, comment, location }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left space-y-2">
      <p className="text-gray-800 text-base italic">“{comment}”</p>
      <p className="text-sm text-blue-700 font-bold">{name}</p>
      {location && <p className="text-xs text-gray-500">{location}</p>}
    </div>
  )
}
