interface JsonLdProps {
  locale: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aurelkolani.dev";

export default function JsonLd({ locale }: JsonLdProps) {
  const isEn = locale === "en";

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Pag'yendou Christian Aurel Trésor Kolani",
    alternateName: "Aurel Kolani",
    givenName: "Christian Aurel Trésor",
    familyName: "Kolani",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    email: "aureliuskolani@gmail.com",
    telephone: "+221773491210",
    jobTitle: isEn ? "FullStack Developer" : "Développeur FullStack",
    description: isEn
      ? "Backend-oriented FullStack Developer specialized in TypeScript, Node.js, Express, React, Next.js, and Laravel."
      : "Développeur FullStack orienté Backend spécialisé en TypeScript, Node.js, Express, React, Next.js et Laravel.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dakar",
      addressCountry: isEn ? "Senegal" : "Sénégal",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Groupe ISM Dakar",
        url: "https://www.ism.edu.sn/",
      },
      {
        "@type": "EducationalOrganization",
        name: "Groupe Supdeco Dakar",
        url: "https://www.supdeco.sn/",
      },
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "REST API",
      "Microservices",
      "Git",
      "TailwindCSS",
      "React Native",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/christian-aurel/",
      "https://github.com/Aurel667",
    ],
    worksFor: {
      "@type": "Organization",
      name: "KUCIBOK",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Aurel Kolani — Portfolio",
    description: isEn
      ? "Portfolio of Aurel Kolani, Backend-oriented FullStack Developer based in Dakar."
      : "Portfolio de Aurel Kolani, Développeur FullStack orienté Backend basé à Dakar.",
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: [
      { "@type": "Language", name: "French", alternateName: "fr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/${locale}/#webpage`,
    url: `${SITE_URL}/${locale}`,
    name: isEn
      ? "Aurel Kolani — FullStack Developer TypeScript & Node.js"
      : "Aurel Kolani — Développeur FullStack TypeScript & Node.js",
    description: isEn
      ? "Portfolio of Aurel Kolani, Backend-oriented FullStack Developer. Expert in TypeScript, Node.js, React, Laravel."
      : "Portfolio de Aurel Kolani, Développeur FullStack orienté Backend. Expert TypeScript, Node.js, React, Laravel.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    dateCreated: "2025-12-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  // ProfilePage Schema (Google specific for portfolio/about pages)
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/${locale}/#profilepage`,
    url: `${SITE_URL}/${locale}`,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    dateCreated: "2025-12-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  // ItemList Schema for Projects (rich results)
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEn ? "Projects" : "Projets",
    description: isEn
      ? "Featured projects by Aurel Kolani"
      : "Projets phares de Aurel Kolani",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Kucibok",
          url: "https://kucibok.com",
          description: isEn
            ? "Art management and commerce platform with blockchain traceability."
            : "Plateforme de gestion et commerce d'œuvres d'art avec traçabilité blockchain.",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          author: { "@id": `${SITE_URL}/#person` },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Aurel Chat",
          url: "https://aurel-chat.vercel.app",
          description: isEn
            ? "Real-time messaging application with Socket.io."
            : "Application de messagerie en temps réel avec Socket.io.",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          author: { "@id": `${SITE_URL}/#person` },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "ENT-ESIEX",
          description: isEn
            ? "Complete management system for higher education institutions."
            : "Système complet de gestion pour établissement d'enseignement supérieur.",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          author: { "@id": `${SITE_URL}/#person` },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "LibGest",
          description: isEn
            ? "Online library management system with microservices architecture."
            : "Système de gestion de bibliothèque en ligne en architecture microservices.",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          author: { "@id": `${SITE_URL}/#person` },
        },
      },
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Portfolio" : "Portfolio",
        item: `${SITE_URL}/${locale}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
