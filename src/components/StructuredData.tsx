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
