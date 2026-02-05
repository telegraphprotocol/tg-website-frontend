import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/components/providers";
import { ThemeColorMeta } from "@/components/theme-color-meta";
import { GoogleAnalytics } from "@/components/google-analytics";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://telegraphprotocol.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Telegraph Protocol - Unlock Real AI On-Chain",
    template: "%s | Telegraph Protocol"
  },
  description: "Turn live AI signals into tradeable assets you can own and profit from. Telegraph Protocol unlocks real-world intelligence on-chain—weather forecasts, media authenticity, sports analytics, and more. Buy verified, time-stamped signals from the best AI models.",
  keywords: [
    "AI on-chain",
    "blockchain AI",
    "tradeable signals",
    "Bittensor",
    "AI inference",
    "on-chain signals",
    "decentralized AI",
    "AI marketplace",
    "blockchain intelligence",
    "Telegraph Protocol"
  ],
  authors: [{ name: "Telegraph Protocol" }],
  creator: "Telegraph Protocol",
  publisher: "Telegraph Protocol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Telegraph Protocol",
    title: "Telegraph Protocol - Unlock Real AI On-Chain",
    description: "Turn live AI signals into tradeable assets you can own and profit from. Buy verified, time-stamped signals from the best AI models.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Telegraph Protocol - Unlock Real AI On-Chain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegraph Protocol - Unlock Real AI On-Chain",
    description: "Turn live AI signals into tradeable assets you can own and profit from. Buy verified, time-stamped signals from the best AI models.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@telegraphprotocol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeColorMeta />
      </head>
      <body
        className={`${instrumentSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
