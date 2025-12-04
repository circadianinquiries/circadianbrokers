// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Get the visitor country from the header
  const country = req.headers.get('x-vercel-ip-country');

  // List of blocked countries
  const blockedCountries = ['IN', 'PK', 'BD']; // use ISO country codes

  if (blockedCountries.includes(country)) {
    // Block access with 403
    // return new NextResponse('Access Denied', { status: 403 });
    return new NextResponse.rewrite(new URL("/blocked", req.url));
  }

  // Allow all other requests
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
