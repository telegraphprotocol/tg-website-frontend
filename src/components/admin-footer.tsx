export function AdminFooter() {
  return (
    <footer className="border-t border-border mt-8 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Telegraph Protocol. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

