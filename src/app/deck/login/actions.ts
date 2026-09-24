"use server"

import { cookies } from "next/headers"
import {
  DECK_COOKIE_NAME,
  DECK_SESSION_MAX_AGE_SECONDS,
  getSessionExpiry,
  signSession,
  verifyPassword,
} from "@/lib/deck-auth"

export type LoginState = {
  error?: string
  redirectTo?: string
}

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "")
  const from = String(formData.get("from") ?? "/deck")

  if (!process.env.DECK_PASSWORD || !process.env.DECK_AUTH_SECRET) {
    return { error: "Deck is not configured." }
  }

  const isValid = await verifyPassword(password)
  if (!isValid) {
    return { error: "Incorrect password." }
  }

  const token = await signSession(getSessionExpiry())

  const cookieStore = await cookies()
  cookieStore.set(DECK_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/deck",
    maxAge: DECK_SESSION_MAX_AGE_SECONDS,
  })

  // Full-page navigation on the client: /deck resolves to a PDF, which a server action redirect can't render
  return { redirectTo: from.startsWith("/deck") ? from : "/deck" }
}
