interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  )
}
