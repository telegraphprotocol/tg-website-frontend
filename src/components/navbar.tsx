"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const leftLinks = [
    { href: "/#home", label: "Product" },
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/#developers", label: "Developers" },
  ]

  const rightLinks = [
    { href: "/#nodes", label: "Nodes" },
    { href: "/marketplace", label: "Signal Directory" },
    { href: "/#docs", label: "Docs" },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex flex-1 items-center justify-end gap-8 pr-8 md:flex hidden">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer group transition-all duration-200"
        >
          <Image
            src="/logo.png"
            alt="Telegraph Logo"
            width={24}
            height={24}
            className="h-6 w-6 group-hover:scale-110 transition-all duration-200"
          />
          <span className="text-base font-semibold text-foreground">
            Telegraph
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-start gap-8 pl-8 md:flex hidden">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="mt-8 flex flex-col gap-4">
                {allLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors ${
                        pathname === link.href
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

