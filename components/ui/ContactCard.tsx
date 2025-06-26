'use client'

type ContactCardProps = {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ContactCard({ title, description, icon }: ContactCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl transition-all">
      <div className="text-blue-600 text-3xl">{icon}</div>
      <div>
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
