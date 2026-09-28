import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("PROXY:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/todos", "/todos/:path*"],
};
