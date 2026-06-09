import { siteConfig } from "@/lib/siteConfig";
import { projects, skills, experience } from "@/lib/data";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "James Kahoro",
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Software Engineer & UI Designer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: skills.map((s) => s.name),
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      description:
        "Full-stack web development, UI/UX design, and digital branding",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Remote",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "James Kahoro Portfolio",
    url: siteConfig.url,
    description:
      "Portfolio of James Kahoro — full-stack developer & UI engineer based in Nairobi, Kenya.",
    author: {
      "@type": "Person",
      name: "James Kahoro",
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProjectsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by James Kahoro",
    description:
      "A curated selection of web development and design projects by James Kahoro.",
    url: `${siteConfig.url}/projects`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        url: p.href,
        dateCreated: p.year,
        keywords: p.tags.join(", "),
        creator: {
          "@type": "Person",
          name: "James Kahoro",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function AboutJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About James Kahoro",
    url: `${siteConfig.url}/about`,
    mainEntity: {
      "@type": "Person",
      name: "James Kahoro",
      jobTitle: "Senior Full-Stack Developer",
      description:
        "Full-stack developer & UI engineer with 5+ years building scalable digital products. Based in Nairobi, Kenya.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      hasCredential: experience.map((e) => ({
        "@type": "EducationalOccupationalCredential",
        name: e.role,
        description: e.company,
        validFrom: e.period.split(" — ")[0],
      })),
      sameAs: [siteConfig.linkedin, siteConfig.github],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
