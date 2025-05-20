import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdminHome() {
  const links = [
    { title: "Usuarios", href: "/(admin)/users" },
    { title: "Contactos", href: "/(admin)/contacts" },
    { title: "Calendario", href: "/(admin)/calendar" },
    { title: "Multimedia", href: "/(admin)/media" },
    { title: "Configuración", href: "/(admin)/settings" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {links.map((link) => (
        <Link key={link.title} href={link.href}>
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-6">
              <CardTitle>{link.title}</CardTitle>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
