import { Card, CardContent } from "@/components/ui/card"

interface StatisticsCardProps {
  title: string
  value: string
  icon?: React.ReactNode
  color?: string
}

export function StatisticsCard({ title, value, icon, color }: StatisticsCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center gap-4 py-6 px-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-xl ${color || "bg-blue-500"}`}
        >
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-xl font-bold">{value}</div>
        </div>
      </CardContent>
    </Card>
  )
}
