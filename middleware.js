import { NextResponse } from "next/server";

export function middleware(req) {
  // Vercel provides the country code in req.geo.country
  const country = req.geo?.country || "UNKNOWN";

  console.log("Visitor country:", country); // Optional: for debugging

  // Allow only USA (country code 'US')
  if (country !== "US") {
    return new NextResponse(
      "This website is not available in your region.",
      { status: 403 }
    );
  }

  // Continue normally for US visitors
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: ["/:path*"],
};
