import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { Experience } from "@/components/Experience";
import { Globe } from "@/components/Globe";
import { Process } from "@/components/Process";
import { AboutStats } from "@/components/AboutStats";
import { CTA } from "@/components/CTA";
import { AboutJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer & designer based in Nairobi, Kenya. Learn more about James Kahoro's background, work experience, and working process.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/about`,
    title: "About — James Kahoro",
    description:
      "Full-stack developer & designer based in Nairobi, Kenya. 5+ years of experience, 30+ projects delivered.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About James Kahoro — Software Engineer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — James Kahoro",
    description:
      "Full-stack developer & designer based in Nairobi, Kenya. 5+ years of experience, 30+ projects delivered.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <Background />
      <Nav />
      <main>
        <AboutHero />
        <Experience />
        <Process />
        <AboutStats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
