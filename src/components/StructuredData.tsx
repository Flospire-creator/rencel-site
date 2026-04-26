export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rencel Procurements Limited",
    alternateName: "Rencel",
    url: "https://www.rencelprocurements.co.uk",
    logo: "https://www.rencelprocurements.co.uk/favicon.svg",
    description:
      "Technology and procurement consultancy building AI-powered intelligence platforms for automotive, healthcare, energy, and supply chain sectors.",
    foundingDate: "2015-08-25",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
    areaServed: [
      { "@type": "Continent", name: "Europe" },
      { "@type": "Continent", name: "Asia" },
      { "@type": "Continent", name: "Africa" },
      { "@type": "Continent", name: "North America" },
      { "@type": "Continent", name: "South America" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-1934-515563",
      email: "info@rencelprocurements.co.uk",
      contactType: "sales",
    },
    sameAs: [],
    knowsAbout: [
      "Procurement Intelligence",
      "Supply Chain Automation",
      "Digital Twin Technology",
      "Automotive Data Intelligence",
      "Healthcare Platform Development",
      "NHS Digital Systems",
      "AI-Powered Analytics",
      "Global Sourcing",
      "Logistics Management",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RENCEL",
    alternateName: "Rencel Procurements",
    url: "https://www.rencelprocurements.co.uk",
    description:
      "Technology and procurement consultancy. AI-powered intelligence platforms for automotive, healthcare, energy, and supply chain sectors.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Rencel Procurements Limited",
      url: "https://www.rencelprocurements.co.uk",
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.rencelprocurements.co.uk/digital#business",
    name: "Rencel Procurements Digital",
    alternateName: "Rencel Digital",
    url: "https://www.rencelprocurements.co.uk/digital",
    logo: "https://www.rencelprocurements.co.uk/favicon.svg",
    image: "https://www.rencelprocurements.co.uk/favicon.svg",
    description:
      "Rencel Digital helps small businesses across the UK build practical websites, set up digital tools, improve operations and access procurement support.",
    telephone: "+44-1934-515563",
    email: "info@rencelprocurements.co.uk",
    priceRange: "£450 - £30,000+",
    address: {
      "@type": "PostalAddress",
      streetAddress: "162 High Street",
      addressLocality: "Bristol",
      postalCode: "BS20 6PY",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "Place", name: "Chippenham" },
      { "@type": "Place", name: "Wiltshire" },
      { "@type": "Place", name: "Bristol" },
      { "@type": "Place", name: "Bath" },
      { "@type": "Place", name: "Swindon" },
      { "@type": "Place", name: "London" },
      { "@type": "Place", name: "Miami" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Nigeria" },
    ],
    serviceType: [
      "Website design for small businesses",
      "Website redesign",
      "Digital setup for small businesses",
      "Business email and domain setup",
      "Payment tool setup",
      "Booking system setup",
      "Small business tech support",
      "Procurement support",
      "Digital operations support",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital services for small businesses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website design for small businesses",
            description:
              "Practical website design for small businesses that need a clear, credible online presence.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website redesign",
            description:
              "Website improvements for businesses with outdated, unclear or underperforming websites.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital setup for small businesses",
            description:
              "Support with domains, business email, payment tools, booking systems and simple digital operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Procurement support",
            description:
              "Procurement and supplier support for small businesses that need better sourcing, purchasing or operational structure.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Small business tech support",
            description:
              "Practical help for small business owners who need digital tools set up and working, without complexity.",
          },
        },
      ],
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Rencel Procurements Limited",
      url: "https://www.rencelprocurements.co.uk",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ questions }: { questions: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
