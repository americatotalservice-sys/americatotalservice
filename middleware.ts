import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './app/_lib/i18n/config';

function getLocaleFromRequest(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';

  const preferred = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const lang of preferred) {
    if (lang.startsWith('pt')) return 'pt';
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('en')) return 'en';
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora _next e arquivos estáticos
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') // arquivos como .css, .js, .ico etc.
  ) {
    return NextResponse.next();
  }

  // Se a URL já começa com um locale válido, segue normal
  const hasLocale = locales.some((locale) =>
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Se não tem locale, decide para qual enviar
  const locale = getLocaleFromRequest(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}

// Aplica o middleware em todas as rotas "de página"
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
