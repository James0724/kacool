import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Globe } from "@/components/Globe";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with James Kahoro. Available for web development, UI/UX design, and branding projects globally.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    title: "Contact — James Kahoro",
    description:
      "Get in touch with James Kahoro. Available for web development, UI/UX design, and branding projects globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact James Kahoro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — James Kahoro",
    description:
      "Get in touch with James Kahoro. Available for web development, UI/UX design, and branding projects globally.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <ContactForm />
      </main>
      <Globe />
      <Footer />
    </>
  );
}
