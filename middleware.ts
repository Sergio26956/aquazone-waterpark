import { NextRequest, NextResponse } from 'next/server';

const locales = ['es', 'en', 'fr', 'de', 'pt'];
const defaultLocale = 'es';

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferred = acceptLanguage.split(',')[0].split('-')[0];
  return locales.includes(preferred) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    locales.some((loc) => pathname.startsWith(`/${loc}`))
  ) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
