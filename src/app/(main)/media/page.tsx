import type { Metadata } from "next";
import { MediaHero } from "@/components/landing/media/hero";
import { MediaArticles } from "@/components/landing/media/articles";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export const metadata: Metadata = {
  title: "Media — Telegraph in the Press",
  description:
    "Press coverage, interviews, and external commentary on Telegraph Protocol — the verified intelligence settlement layer for the machine economy.",
  openGraph: {
    title: "Media — Telegraph in the Press",
    description:
      "Press coverage, interviews, and external commentary on Telegraph Protocol.",
    url: `${baseUrl}/media`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/telegraph-social-card.jpg`,
        width: 1200,
        height: 630,
        alt: "Telegraph Protocol in the Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media — Telegraph in the Press",
    description:
      "Press coverage, interviews, and external commentary on Telegraph Protocol.",
    images: [`${baseUrl}/telegraph-social-card.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/media`,
  },
};

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <MediaArticles />
    </>
  );
}
