import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "UNKNOWN";
  console.log("Vercel detected country:", country); // This will appear in Vercel logs

  const blockCountries = process.env.NEXT_PUBLIC_BLOCK_COUNTRIES === "true";
  console.log("Block countries enabled:", blockCountries);

  if (!blockCountries) return NextResponse.next();

  if (country !== "US") {
    return new NextResponse("Not available in your region", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Make sure this matches all your pages
};
