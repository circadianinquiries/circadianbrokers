import { NextResponse } from "next/server";

export function middleware(request) {
  const country = request.geo?.country || "UNKNOWN";

  // Allow only USA traffic
  if (country !== "US") {
    return new NextResponse(
      "This website is not available in your region.",
      { status: 403 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Apply to all routes
};
