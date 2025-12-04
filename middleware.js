// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Country from Vercel edge
  const country = req.headers.get('x-vercel-ip-country');

  // Blocked country ISO codes
  const blockedCountries = ['IN', 'PK', 'BD', 'CH', 'SG', 'RU'];

  if (blockedCountries.includes(country)) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  // Allow
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
