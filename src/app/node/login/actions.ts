"use server"

import { cookies } from "next/headers"
import {
  NODE_COOKIE_NAME,
  NODE_SESSION_MAX_AGE_SECONDS,
  getSessionExpiry,
  signSession,
  verifyPassword,
} from "@/lib/node-auth"

export type LoginState = {
  error?: string
  redirectTo?: string
}

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "")
  const from = String(formData.get("from") ?? "/node")

  if (!process.env.NODE_PASSWORD || !process.env.NODE_AUTH_SECRET) {
    return { error: "Node page is not configured." }
  }

  const isValid = await verifyPassword(password)
  if (!isValid) {
    return { error: "Incorrect password." }
  }

  const token = await signSession(getSessionExpiry())

  const cookieStore = await cookies()
  cookieStore.set(NODE_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/node",
    maxAge: NODE_SESSION_MAX_AGE_SECONDS,
  })

  // Full-page navigation on the client: /node resolves to a PDF, which a server action redirect can't render
  return { redirectTo: from.startsWith("/node") ? from : "/node" }
}
