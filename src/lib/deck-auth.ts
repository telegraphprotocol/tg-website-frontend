export const DECK_COOKIE_NAME = "deck_session"
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data))
  return Buffer.from(signature).toString("hex")
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let mismatch = 0
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return mismatch === 0
}

export async function signSession(expiresAt: number): Promise<string> {
  const secret = process.env.DECK_AUTH_SECRET
  if (!secret) throw new Error("DECK_AUTH_SECRET is not set")
  const signature = await hmac(secret, String(expiresAt))
  return `${expiresAt}.${signature}`
}

export async function verifySession(cookieValue: string | undefined): Promise<boolean> {
  const secret = process.env.DECK_AUTH_SECRET
  if (!cookieValue || !secret) return false

  const [expiresAtRaw, signature] = cookieValue.split(".")
  if (!expiresAtRaw || !signature) return false

  const expectedSignature = await hmac(secret, expiresAtRaw)
  if (!timingSafeEqual(signature, expectedSignature)) return false

  const expiresAt = Number(expiresAtRaw)
  return Number.isFinite(expiresAt) && expiresAt > Date.now()
}

export async function verifyPassword(input: string): Promise<boolean> {
  const expected = process.env.DECK_PASSWORD
  if (!expected) return false

  const digest = async (value: string) => {
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))
    return Buffer.from(hash).toString("hex")
  }

  const [inputHash, expectedHash] = await Promise.all([digest(input), digest(expected)])
  return timingSafeEqual(inputHash, expectedHash)
}

export function getSessionExpiry(): number {
  return Date.now() + SESSION_DURATION_MS
}

export const DECK_SESSION_MAX_AGE_SECONDS = SESSION_DURATION_MS / 1000
