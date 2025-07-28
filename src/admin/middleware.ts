import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  const verified = verifyToken(token);
  if (!verified) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/admin/:path*', '/admin'],
};
