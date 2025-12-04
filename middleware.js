import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "UNKNOWN";

  if (process.env.NODE_ENV === "development" || !process.env.BLOCK_COUNTRIES) {
    return NextResponse.next(); // allow everything in dev
  }

  if (country !== "US") {
    return new NextResponse("Not available in your region", { status: 403 });
  }

  return NextResponse.next();
}
