export function ThemeColorMeta() {
  // Primary color: hsl(15, 100%, 53%) - Orange/Red
  // Converted to hex: #FF6B35
  return (
    <>
      <meta name="theme-color" content="#FF6B35" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
    </>
  )
}

