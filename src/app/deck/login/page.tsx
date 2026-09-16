"use client"

import { Suspense, useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { loginAction, type LoginState } from "./actions"

const initialState: LoginState = {}

export default function DeckLoginPage() {
  return (
    <Suspense>
      <DeckLoginForm />
    </Suspense>
  )
}

function DeckLoginForm() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from") ?? "/deck"
  const [state, formAction, isPending] = useActionState(loginAction, initialState)

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 border rounded-2xl p-8">
        <div>
          <h2 className="text-2xl font-semibold text-center">Deck</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter the password to view the deck
          </p>
        </div>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="from" value={from} />
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required disabled={isPending} autoFocus />
          </div>
          {state.error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {state.error}
            </div>
          )}
          <Button type="submit" className="w-full" variant="secondary" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
