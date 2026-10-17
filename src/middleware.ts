import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const gone = [
  /^\/author(?:\/.*)?$/,
  /^\/wp-admin(?:\/.*)?$/,
  /^\/wp-login\.php$/,
  /^\/wp-sitemap-users-1\.xml$/,
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (gone.some((pattern) => pattern.test(path))) {
    return new NextResponse("Gone", { status: 410 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/author/:path*", "/author", "/wp-admin/:path*", "/wp-login.php", "/wp-sitemap-users-1.xml"],
};
