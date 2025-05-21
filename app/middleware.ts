import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simulación de protección (cambiar en el futuro por auth real)
const ADMIN_ACCESS_TOKEN = "1234" // Sustituir por algo más seguro

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const isAdminRoute = pathname.startsWith("/admin")

  // Permitir acceso público al resto del sitio
  if (!isAdminRoute) return NextResponse.next()

  const token = request.cookies.get("admin-token")?.value || searchParams.get("token")

  if (token === ADMIN_ACCESS_TOKEN) return NextResponse.next()

  // Redirigir al login
  const loginUrl = new URL("/login", request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ["/admin/:path*"],
}
