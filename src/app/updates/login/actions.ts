"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  UPDATES_COOKIE_NAME,
  UPDATES_SESSION_MAX_AGE_SECONDS,
  getSessionExpiry,
  signSession,
  verifyPassword,
} from "@/lib/updates-auth"

export type LoginState = {
  error?: string
}

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "")
  const from = String(formData.get("from") ?? "/updates")

  if (!process.env.UPDATES_PASSWORD || !process.env.UPDATES_AUTH_SECRET) {
    return { error: "Updates section is not configured." }
  }

  const isValid = await verifyPassword(password)
  if (!isValid) {
    return { error: "Incorrect password." }
  }

  const token = await signSession(getSessionExpiry())

  const cookieStore = await cookies()
  cookieStore.set(UPDATES_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/updates",
    maxAge: UPDATES_SESSION_MAX_AGE_SECONDS,
  })

  redirect(from.startsWith("/updates") ? from : "/updates")
}
