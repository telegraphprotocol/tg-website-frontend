"use client";

import Link from "next/link";
import Image from "next/image";

export function AdminNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/t-logo.png"
            alt="Telegraph Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-base font-semibold text-foreground">
            Telegraph
          </span>
        </Link>

        <div className="flex items-center lg:gap-8 gap-4">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Subnets
          </Link>
          <Link
            href="/dashboard/login"
            onClick={() => {
              localStorage.removeItem("admin_token");
            }}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
