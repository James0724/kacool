import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "elev-1": "var(--elev-1)",
        "elev-2": "var(--elev-2)",
        card: "var(--card)",
        "card-soft": "var(--card-soft)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        "text-faint": "var(--text-faint)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-deep": "var(--accent-deep)",
        "on-accent": "var(--on-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "18px",
        sm: "12px",
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        spin360: {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        marqueeR: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        wave: {
          "0%,60%,100%": { transform: "rotate(0)" },
          "10%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
        },
        ping2: {
          "0%": { transform: "scale(0.6)", opacity: "0.9" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "spin-slow": "spin360 18s linear infinite",
        "spin-med": "spin360 9s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 36s linear infinite",
        "marquee-r": "marqueeR 36s linear infinite",
        wave: "wave 2.4s ease-in-out infinite",
        ping2: "ping2 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
