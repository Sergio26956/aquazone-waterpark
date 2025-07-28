import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("aquazone_auth")?.value === "true";

  const adminRoutes = ["/admin/dashboard", "/admin/usuarios", "/admin/calendario"];

  if (adminRoutes.includes(request.nextUrl.pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
