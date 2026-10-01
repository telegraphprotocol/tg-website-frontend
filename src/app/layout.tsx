import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@/components/google-analytics";
import { XPixel } from "@/components/x-pixel";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Runs before first paint on themed pages so the saved theme's background shows
// immediately; RedesignThemeProvider clears the attribute once it has applied the theme.
const PRE_THEME_SCRIPT = `try{if(["/","/whitepaper"].indexOf(location.pathname)>-1){var t=localStorage.getItem("tg-redesign-theme");document.documentElement.setAttribute("data-tg-pre-theme",t==="dark"?"dark":"light")}}catch(e){}`;

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Telegraph - A machine intelligence protocol for autonomous systems",
    template: "%s | Telegraph Protocol",
  },
  description:
    "Telegraph is the network that turns intelligence into a graded commodity. Competing providers are ranked by performance for each Intent, and paid demand follows performance.",
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
    "Telegraph Protocol",
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
    title: "Telegraph - A peer-to-peer ranking protocol for machine intelligence",
    description: "A new way for humans and agents to find answers they can rely on.",
    images: [
      {
        url: `${baseUrl}/telegraph-social-card.jpg`,
        width: 1200,
        height: 630,
        alt: "Telegraph Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegraph - A peer-to-peer ranking protocol for machine intelligence",
    description: "A new way for humans and agents to find answers they can rely on.",
    images: [`${baseUrl}/telegraph-social-card.jpg`],
    creator: "@telegraphprotocol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRE_THEME_SCRIPT }} />
      </head>
      <body
        className={`${robotoMono.variable} font-mono antialiased bg-black text-foreground`}
      >
        <GoogleAnalytics />
        <XPixel />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
