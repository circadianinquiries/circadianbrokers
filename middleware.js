import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "UNKNOWN";

  // Use NEXT_PUBLIC_ env variable
  const blockCountries = process.env.NEXT_PUBLIC_BLOCK_COUNTRIES === "true";

  // Only block if enabled
  if (!blockCountries) {
    return NextResponse.next();
  }

  if (country !== "US") {
    return new NextResponse("Not available in your region", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
