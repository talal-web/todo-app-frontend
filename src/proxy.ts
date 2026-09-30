import { NextResponse, type NextRequest } from "next/server";

// Name of the cookie your Express backend sets on login (change if different)
const SESSION_COOKIE = "session";

// Base URL of your Express API, e.g. http://localhost:5000  (.env.local -> API_URL)
const API_URL = process.env.NEXT_PUBLIC_API_UR!;

// Ask Express (same endpoint as authService.getCurrentUser) if the session is valid
async function isAuthenticated(request: NextRequest): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/api/auth/me`, {
      headers: { cookie: request.headers.get("cookie") ?? "" }, // forward the session cookie
      cache: "no-store",
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  // No cookie at all -> skip the network call
  // Cookie exists -> let the backend verify it
  const valid = token ? await isAuthenticated(request) : false;

  if (!valid) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set(
      "callbackUrl",
      request.nextUrl.pathname + request.nextUrl.search,
    );

    const response = NextResponse.redirect(loginUrl);
    if (token) response.cookies.delete(SESSION_COOKIE); // clear invalid/expired cookie
    return response;
  }

  return NextResponse.next();
}

// Only these routes run through the proxy (and are therefore protected)
export const config = {
  matcher: ["/todos/:path*", "/dashboard/:path*"],
};
