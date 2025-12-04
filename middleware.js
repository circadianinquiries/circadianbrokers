import { NextResponse } from "next/server";

export default function middleware(req) {
  const country = req.geo?.country || "UNKNOWN";

  const blockCountries = process.env.NEXT_PUBLIC_BLOCK_COUNTRIES === "true";

  if (!blockCountries) return NextResponse.next();

  if (country !== "US") {
    return NextResponse.rewrite(new URL('/blocked', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
