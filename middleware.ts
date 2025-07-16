import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isAuth = req.cookies.get('admin_auth')?.value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (isAdminRoute && !isAuth) {
    return NextResponse.redirect(new URL('/admin-login', req.url));
  }

  return NextResponse.next();
}
