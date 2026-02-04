"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Plug, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [aboutOpen, setAboutOpen] = React.useState(false)
  const [docsOpen, setDocsOpen] = React.useState(false)
  const aboutTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const docsTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) {
        clearTimeout(aboutTimeoutRef.current)
      }
      if (docsTimeoutRef.current) {
        clearTimeout(docsTimeoutRef.current)
      }
    }
  }, [])

  const regularLinks = [
    { href: "/#signals", label: "Signals" },
    { href: "/#nodes", label: "Node Runners" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.replace("/#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        window.history.pushState(null, "", href)
      }
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto relative flex h-20 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-all duration-200 z-10"
        >
          <Image
            src="/logo.png"
            alt="Telegraph Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-lg font-semibold text-foreground">
            Telegraph
          </span>
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-8">
          {regularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-[15px] font-medium transition-colors px-2 ${
                pathname === link.href
                  ? "text-foreground/80"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <DropdownMenu open={aboutOpen} modal={false}>
            <div
              onMouseEnter={() => {
                if (aboutTimeoutRef.current) {
                  clearTimeout(aboutTimeoutRef.current)
                  aboutTimeoutRef.current = null
                }
                setAboutOpen(true)
              }}
              onMouseLeave={() => {
                aboutTimeoutRef.current = setTimeout(() => {
                  setAboutOpen(false)
                  aboutTimeoutRef.current = null
                }, 200)
              }}
            >
              <DropdownMenuTrigger 
                className="text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors px-2 flex items-center gap-1 outline-none"
                asChild
              >
                <button type="button">
                  About
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent 
              className="mt-1"
              align="center"
              onMouseEnter={() => {
                if (aboutTimeoutRef.current) {
                  clearTimeout(aboutTimeoutRef.current)
                  aboutTimeoutRef.current = null
                }
                setAboutOpen(true)
              }}
              onMouseLeave={() => {
                aboutTimeoutRef.current = setTimeout(() => {
                  setAboutOpen(false)
                  aboutTimeoutRef.current = null
                }, 200)
              }}
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/#home"
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#home")
                    setAboutOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#our-team"
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#our-team")
                    setAboutOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  Our Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#use-cases"
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#use-cases")
                    setAboutOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  Use Cases
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/#how-it-works"
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#how-it-works")
                    setAboutOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  How it Works
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={docsOpen} modal={false}>
            <div
              onMouseEnter={() => {
                if (docsTimeoutRef.current) {
                  clearTimeout(docsTimeoutRef.current)
                  docsTimeoutRef.current = null
                }
                setDocsOpen(true)
              }}
              onMouseLeave={() => {
                docsTimeoutRef.current = setTimeout(() => {
                  setDocsOpen(false)
                  docsTimeoutRef.current = null
                }, 200)
              }}
            >
              <DropdownMenuTrigger 
                className="text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors px-2 flex items-center gap-1 outline-none"
                asChild
              >
                <button type="button">
                  Docs & Socials
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${docsOpen ? 'rotate-180' : ''}`} />
                </button>
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent 
            className="mt-1"
              align="center"
              onMouseEnter={() => {
                if (docsTimeoutRef.current) {
                  clearTimeout(docsTimeoutRef.current)
                  docsTimeoutRef.current = null
                }
                setDocsOpen(true)
              }}
              onMouseLeave={() => {
                docsTimeoutRef.current = setTimeout(() => {
                  setDocsOpen(false)
                  docsTimeoutRef.current = null
                }, 200)
              }}
            >
              <DropdownMenuItem asChild>
                <Link 
                  href="/#docs" 
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#docs")
                    setDocsOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  Guide
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  href="/#docs" 
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#docs")
                    setDocsOpen(false)
                  }}
                  className="cursor-pointer"
                >
                 Whitepaper
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  href="/#docs" 
                  onClick={(e) => {
                    handleSmoothScroll(e, "/#docs")
                    setDocsOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  Document 3
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-4 z-10">
          <Button
            className="bg-primary hover:bg-primary/90 group hidden lg:flex rounded-full pr-3 pl-5"
            asChild
          >
            <Link href="/marketplace">
              Marketplace
              <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="mt-8 flex flex-col gap-4">
                {regularLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, link.href)
                        setOpen(false)
                      }}
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
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="about" className="border-none">
                    <AccordionTrigger className="py-2 px-4 hover:no-underline">
                      About
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col gap-1 pl-4">
                        <SheetClose asChild>
                          <Link
                            href="/#home"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#home")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            About
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/#our-team"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#our-team")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Our Team
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/#use-cases"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#use-cases")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Use Cases
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/#how-it-works"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#how-it-works")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            How it Works
                          </Link>
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="docs" className="border-none">
                    <AccordionTrigger className="py-2 px-4 hover:no-underline">
                      Docs & Socials
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col gap-1 pl-4">
                        <SheetClose asChild>
                          <Link
                            href="/#docs"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#docs")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Document 1
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/#docs"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#docs")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Document 2
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/#docs"
                            onClick={(e) => {
                              handleSmoothScroll(e, "/#docs")
                              setOpen(false)
                            }}
                            className="flex h-9 w-full items-center px-4 py-2 font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Document 3
                          </Link>
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <SheetClose asChild>
                  <Button
                    size="hero-primary"
                    className="bg-primary hover:bg-primary/90 group mt-4"
                    asChild
                  >
                    <Link
                      href="/#integrate"
                      onClick={() => setOpen(false)}
                    >
                      <Plug className="h-4 w-4" />
                      Integrate Signals
                      <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

