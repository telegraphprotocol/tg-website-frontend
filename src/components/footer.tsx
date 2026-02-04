import Link from "next/link"

export function Footer() {

  return (
    <footer className="border-t border-border/50 bg-muted/30 mt-28">
      <div className="container mx-auto px-4 py-12">
     

        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Telegraph. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

