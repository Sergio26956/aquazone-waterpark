import "../globals.css"
import type { ReactNode } from "react"

export default function WebLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-black">
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
