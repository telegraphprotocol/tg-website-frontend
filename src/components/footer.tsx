import Link from "next/link"
import Image from "next/image"
import { ArrowUp, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  const features = [
    { label: "Page", href: "/#page1" },
    { label: "Page", href: "/#page2" },
    { label: "Page", href: "/#page3", isNew: true },
    { label: "Page", href: "/#page4" },
  ]

  const solutions = [
    { label: "Page", href: "/#page5" },
    { label: "Page", href: "/#page6", isNew: true },
    { label: "Page", href: "/#page7" },
    { label: "Page", href: "/#page8" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30 mt-28">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground">
                <span className="text-lg font-semibold text-background">T</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Telegraph
              </span>
            </Link>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary text-background transition-colors hover:bg-primary/90"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary transition-colors hover:bg-muted"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Features</h3>
            <ul className="space-y-2">
              {features.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span className="text-xs text-primary">New!</span>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        <span className="text-xs text-primary">New!</span>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 lg:flex-row">
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
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
          <Link
            href="#home"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Go back top
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

