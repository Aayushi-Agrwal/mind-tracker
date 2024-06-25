import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token"); // assuming token is stored in cookies

  // Define paths that don't require authentication
  const publicPaths = ["/auth"];

  // Check if the request is for a public path
  const isPublicPath = publicPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (!token && !isPublicPath) {
    // If no token and not requesting a public path, redirect to login
    const loginUrl = new URL("/auth", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request if authenticated or if it's a public path
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
