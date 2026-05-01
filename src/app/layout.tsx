import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@/components/google-analytics";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://telegraphprotocol.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Telegraph — A machine intelligence protocol for autonomous systems",
    template: "%s | Telegraph Protocol"
  },
  description: "Telegraph is a messaging protocol built on Base that transforms raw AI outputs from any open or closed-source model into verified, tradable answers that machines can use to make decisions and execute tasks autonomously.",
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
    title: "Telegraph — A machine intelligence protocol for autonomous systems",
    description: "Verified, tradable AI answers for autonomous machines.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Telegraph Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegraph — A machine intelligence protocol for autonomous systems",
    description: "Verified, tradable AI answers for autonomous machines.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${robotoMono.variable} font-mono antialiased bg-black text-foreground`}
      >
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
