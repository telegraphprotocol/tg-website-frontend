import { NextRequest, NextResponse } from "next/server"
import { UPDATES_COOKIE_NAME, verifySession as verifyUpdatesSession } from "@/lib/updates-auth"
import { DECK_COOKIE_NAME, verifySession as verifyDeckSession } from "@/lib/deck-auth"

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith("/deck")) {
    if (pathname.startsWith("/deck/login")) {
      return NextResponse.next()
    }

    const cookie = req.cookies.get(DECK_COOKIE_NAME)?.value
    const isAuthenticated = await verifyDeckSession(cookie)

    if (!isAuthenticated) {
      const loginUrl = new URL("/deck/login", req.url)
      loginUrl.searchParams.set("from", pathname)
      return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
  }

  if (pathname.startsWith("/updates/login")) {
    return NextResponse.next()
  }

  const cookie = req.cookies.get(UPDATES_COOKIE_NAME)?.value
  const isAuthenticated = await verifyUpdatesSession(cookie)

  if (!isAuthenticated) {
    const loginUrl = new URL("/updates/login", req.url)
    loginUrl.searchParams.set("from", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/updates/:path*", "/deck/:path*"],
}
