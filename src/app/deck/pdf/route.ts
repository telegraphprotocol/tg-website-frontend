import { readFile } from "fs/promises"
import path from "path"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { DECK_COOKIE_NAME, verifySession } from "@/lib/deck-auth"

export async function GET() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(DECK_COOKIE_NAME)?.value
  const isAuthenticated = await verifySession(cookie)

  if (!isAuthenticated) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const filePath = path.join(process.cwd(), "src/content/deck/Telegraph_Deck.pdf")
  const file = await readFile(filePath)

  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Telegraph_Deck.pdf"',
    },
  })
}
