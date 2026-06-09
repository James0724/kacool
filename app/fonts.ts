import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

/* Clash Display — display / headings (variable woff2 in /public/fonts) */
export const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-display",
  weight: "200 700",
  display: "swap",
});

/* Satoshi — body text */
export const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-body",
  weight: "300 900",
  display: "swap",
});

/* JetBrains Mono — monospace captions / labels */
export const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = `${clashDisplay.variable} ${satoshi.variable} ${geistMono.variable}`;
