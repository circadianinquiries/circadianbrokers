import { NextResponse } from "next/server";

export default async function middleware(req) {
  const blockCountries = process.env.NEXT_PUBLIC_BLOCK_COUNTRIES === "true";
  if (!blockCountries) return NextResponse.next();

  // Get visitor IP
  const ip = req.headers.get("x-forwarded-for") || req.ip || "127.0.0.1";

  // Call IP geolocation API
  const res = await fetch(`https://ipapi.co/${ip}/json/`);
  const data = await res.json();
  const country = data.country || "UNKNOWN";

  console.log("Visitor IP:", ip, "Country:", country);

  if (country !== "US") {
    // Redirect to blocked page
    return NextResponse.rewrite(new URL("/blocked", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
