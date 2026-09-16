"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  DECK_COOKIE_NAME,
  DECK_SESSION_MAX_AGE_SECONDS,
  getSessionExpiry,
  signSession,
  verifyPassword,
} from "@/lib/deck-auth"

export type LoginState = {
  error?: string
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

  redirect(from.startsWith("/deck") ? from : "/deck")
}
