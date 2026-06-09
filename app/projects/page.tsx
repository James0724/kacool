import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { projects } from "@/lib/data";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectsJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of web development and design projects by James Kahoro — full-stack developer & UI engineer based in Nairobi, Kenya.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/projects`,
    title: "Projects — James Kahoro",
    description:
      "A curated selection of web development and design projects by James Kahoro — React, Next.js, branding, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects by James Kahoro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — James Kahoro",
    description:
      "A curated selection of web development and design projects by James Kahoro.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsJsonLd />
      <Background />
      <Nav />
      <main className="container-x pt-[clamp(7rem,14vw,11rem)] pb-[clamp(5rem,11vw,9rem)]">
        <div className="mb-[clamp(3rem,6vw,5rem)]">
          <SectionHeader
            cap="Portfolio"
            heading="All projects"
            description="A curated selection showcasing my expertise across development, design, and branding."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) + 1}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden border border-line bg-card transition-all duration-300 hover:border-[rgba(56,189,248,0.4)] hover:shadow-[0_20px_60px_-20px_var(--accent-glow)]"
              >
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 items-start justify-between gap-4 p-6">
                  <div className="flex-1">
                    <div className="mb-2 font-mono text-[0.78rem] text-text-faint">
                      0{i + 1}
                    </div>
                    <h2 className="font-display text-[1.2rem] font-medium leading-tight text-text transition-colors group-hover:text-accent">
                      {p.title}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-[0.7rem] py-[0.3rem] text-[0.74rem] text-text-faint"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="rounded-full border border-line px-[0.7rem] py-[0.3rem] text-[0.74rem] text-text-faint">
                        {p.year}
                      </span>
                    </div>
                  </div>

                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-text-dim transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--on-accent)]">
                    <ArrowUpRight />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
