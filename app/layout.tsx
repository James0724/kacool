import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { siteConfig } from "@/lib/siteConfig";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "James Kahoro",
    "full-stack developer",
    "UI engineer",
    "web developer Nairobi",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "UI/UX designer",
    "freelance web developer Kenya",
    "software engineer",
    "digital products",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "James Kahoro Portfolio",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Kahoro — Software Engineer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@jameskahoro",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
