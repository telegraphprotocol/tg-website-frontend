const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://telegraphprotocol.com";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Telegraph Protocol",
    url: baseUrl,
    logo: `${baseUrl}/t-logo.png`,
    description:
      "The marketplace where the world's intelligence competes for every task. Ranked by performance. Driven by demand.",
    sameAs: ["https://x.com/Telegraphprotoc"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@telegraphprotocol.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Telegraph Protocol",
    url: baseUrl,
    description:
      "One integration gives agents, applications and enterprises access to an ever-evolving marketplace of specialist intelligence, continuously evaluated and ranked by task.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/marketplace?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Signal Marketplace",
    provider: {
      "@type": "Organization",
      name: "Telegraph Protocol",
    },
    description:
      "Telegraph Protocol provides a platform to buy and trade verified AI signals from Bittensor subnets. Turn real-world intelligence into market-ready signals including weather forecasts, media authenticity checks, sports analytics, and content verification.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Signals",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weather Signals",
            description:
              "Buy on-demand, location-specific weather and environmental forecasts",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Media Signals",
            description:
              "Buy authenticity checks for media to detect AI-generated content",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sport Signals",
            description:
              "Buy automated football match analytics and player tracking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Signals",
            description:
              "Buy text authenticity checks to detect AI-generated content",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
