"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { skills } from "@/lib/data";

export function SkillChip({ name, icon }: { name: string; icon: string }) {
  return (
    <span className="ed-sk">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" loading="lazy" />
      {name}
    </span>
  );
}

function DevVisual() {
  return (
    <svg
      viewBox="0 0 280 188"
      fill="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {[36, 72, 108, 144].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="280"
          y2={y}
          stroke="rgba(56,189,248,0.06)"
          strokeWidth="1"
        />
      ))}
      {[56, 112, 168, 224].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="188"
          stroke="rgba(56,189,248,0.06)"
          strokeWidth="1"
        />
      ))}
      <rect
        x="36"
        y="22"
        width="208"
        height="140"
        rx="8"
        fill="rgba(56,189,248,0.03)"
        stroke="rgba(56,189,248,0.12)"
        strokeWidth="1"
      />
      <rect
        x="36"
        y="22"
        width="208"
        height="24"
        rx="8"
        fill="rgba(56,189,248,0.06)"
      />
      <circle cx="54" cy="34" r="4" fill="rgba(248,113,113,0.5)" />
      <circle cx="68" cy="34" r="4" fill="rgba(251,191,36,0.4)" />
      <circle cx="82" cy="34" r="4" fill="rgba(52,211,153,0.4)" />
      <rect
        x="52"
        y="58"
        width="70"
        height="4"
        rx="2"
        fill="rgba(167,139,250,0.45)"
      />
      <rect
        x="52"
        y="70"
        width="114"
        height="4"
        rx="2"
        fill="rgba(56,189,248,0.25)"
      />
      <rect
        x="64"
        y="82"
        width="94"
        height="4"
        rx="2"
        fill="rgba(56,189,248,0.15)"
      />
      <rect
        x="64"
        y="94"
        width="74"
        height="4"
        rx="2"
        fill="rgba(52,211,153,0.35)"
      />
      <rect
        x="52"
        y="106"
        width="54"
        height="4"
        rx="2"
        fill="rgba(56,189,248,0.25)"
      />
      <rect
        x="52"
        y="118"
        width="86"
        height="4"
        rx="2"
        fill="rgba(56,189,248,0.1)"
      />
      <rect
        x="52"
        y="130"
        width="62"
        height="4"
        rx="2"
        fill="rgba(167,139,250,0.2)"
      />
      <rect
        x="52"
        y="142"
        width="8"
        height="14"
        rx="1"
        fill="rgba(56,189,248,0.55)"
      />
    </svg>
  );
}

function DesignVisual() {
  return (
    <svg
      viewBox="0 0 280 188"
      fill="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <rect
        x="28"
        y="18"
        width="224"
        height="148"
        rx="5"
        fill="none"
        stroke="rgba(167,139,250,0.12)"
        strokeWidth="1"
      />
      <rect
        x="28"
        y="18"
        width="224"
        height="26"
        rx="5"
        fill="rgba(167,139,250,0.06)"
      />
      <rect
        x="38"
        y="27"
        width="40"
        height="8"
        rx="4"
        fill="rgba(167,139,250,0.22)"
      />
      <rect
        x="84"
        y="27"
        width="28"
        height="8"
        rx="4"
        fill="rgba(167,139,250,0.1)"
      />
      <rect
        x="118"
        y="27"
        width="28"
        height="8"
        rx="4"
        fill="rgba(167,139,250,0.1)"
      />
      <rect
        x="28"
        y="44"
        width="58"
        height="122"
        fill="rgba(167,139,250,0.04)"
      />
      <rect
        x="36"
        y="54"
        width="42"
        height="7"
        rx="3"
        fill="rgba(167,139,250,0.22)"
      />
      <rect
        x="36"
        y="68"
        width="34"
        height="7"
        rx="3"
        fill="rgba(167,139,250,0.13)"
      />
      <rect
        x="36"
        y="82"
        width="38"
        height="7"
        rx="3"
        fill="rgba(167,139,250,0.13)"
      />
      <rect
        x="36"
        y="96"
        width="30"
        height="7"
        rx="3"
        fill="rgba(167,139,250,0.08)"
      />
      <rect
        x="96"
        y="52"
        width="148"
        height="104"
        rx="4"
        fill="rgba(167,139,250,0.03)"
        stroke="rgba(167,139,250,0.1)"
        strokeWidth="1"
        strokeDasharray="5 3"
      />
      <rect
        x="106"
        y="63"
        width="128"
        height="46"
        rx="4"
        fill="rgba(167,139,250,0.07)"
        stroke="rgba(167,139,250,0.14)"
        strokeWidth="1"
      />
      <circle
        cx="122"
        cy="86"
        r="12"
        fill="rgba(167,139,250,0.12)"
        stroke="rgba(167,139,250,0.2)"
        strokeWidth="1"
      />
      <rect
        x="142"
        y="77"
        width="78"
        height="6"
        rx="3"
        fill="rgba(167,139,250,0.22)"
      />
      <rect
        x="142"
        y="89"
        width="58"
        height="6"
        rx="3"
        fill="rgba(167,139,248,0.1)"
      />
      <circle cx="230" cy="38" r="16" fill="rgba(167,139,250,0.1)" />
      <circle cx="230" cy="38" r="8" fill="rgba(167,139,250,0.18)" />
    </svg>
  );
}

function BrandVisual() {
  return (
    <svg
      viewBox="0 0 280 188"
      fill="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <circle
        cx="100"
        cy="88"
        r="58"
        fill="rgba(52,211,153,0.05)"
        stroke="rgba(52,211,153,0.12)"
        strokeWidth="1"
      />
      <circle
        cx="158"
        cy="70"
        r="44"
        fill="rgba(56,189,248,0.04)"
        stroke="rgba(56,189,248,0.11)"
        strokeWidth="1"
      />
      <circle
        cx="178"
        cy="118"
        r="36"
        fill="rgba(251,191,36,0.04)"
        stroke="rgba(251,191,36,0.1)"
        strokeWidth="1"
      />
      <polygon
        points="140,54 165,90 140,126 115,90"
        fill="rgba(52,211,153,0.08)"
        stroke="rgba(52,211,153,0.2)"
        strokeWidth="1"
      />
      <circle cx="140" cy="90" r="8" fill="rgba(52,211,153,0.22)" />
      <rect
        x="28"
        y="156"
        width="20"
        height="20"
        rx="5"
        fill="rgba(52,211,153,0.35)"
      />
      <rect
        x="52"
        y="156"
        width="20"
        height="20"
        rx="5"
        fill="rgba(56,189,248,0.35)"
      />
      <rect
        x="76"
        y="156"
        width="20"
        height="20"
        rx="5"
        fill="rgba(167,139,250,0.35)"
      />
      <rect
        x="100"
        y="156"
        width="20"
        height="20"
        rx="5"
        fill="rgba(251,191,36,0.3)"
      />
      <rect
        x="124"
        y="156"
        width="20"
        height="20"
        rx="5"
        fill="rgba(248,113,113,0.3)"
      />
      <rect
        x="152"
        y="159"
        width="100"
        height="5"
        rx="2.5"
        fill="rgba(52,211,153,0.18)"
      />
      <rect
        x="152"
        y="168"
        width="76"
        height="5"
        rx="2.5"
        fill="rgba(52,211,153,0.1)"
      />
    </svg>
  );
}

const services = [
  {
    num: "01",
    icon: "</>",
    title: "Full-Stack\nDevelopment",
    tagline: "Fast. Scalable. Production-ready.",
    copy: "End-to-end web applications built with React, Next.js, and Node.js. From API architecture to pixel-perfect UIs — I own every layer so nothing falls through the cracks.",
    deliverables: [
      "React / Next.js",
      "Node & Express APIs",
      "PostgreSQL / MongoDB",
      "Auth & Security",
      "CI/CD Pipelines",
      "Performance Tuning",
    ],
    visual: <DevVisual />,
    hoverBorder: "rgba(56,189,248,0.38)",
    hoverShadow: "0 24px 60px -20px rgba(56,189,248,0.15)",
    glowBg:
      "radial-gradient(140% 120% at 50% 110%, rgba(56,189,248,0.06) 0%, transparent 62%)",
    accentColor: "#38bdf8",
    accentBorder: "rgba(56,189,248,0.2)",
  },
  {
    num: "02",
    icon: "✦",
    title: "UI / UX\nDesign",
    tagline: "Interfaces that feel inevitable.",
    copy: "User journeys mapped, wireframes refined, and high-fidelity designs polished to a standard that turns visitors into customers. Every interaction considered, every pixel intentional.",
    deliverables: [
      "Wireframes & User Flows",
      "High-Fidelity Mockups",
      "Design Systems",
      "Responsive Layouts",
      "Interaction Design",
      "Accessibility (WCAG)",
    ],
    visual: <DesignVisual />,
    hoverBorder: "rgba(167,139,250,0.38)",
    hoverShadow: "0 24px 60px -20px rgba(167,139,250,0.15)",
    glowBg:
      "radial-gradient(140% 120% at 50% 110%, rgba(167,139,250,0.06) 0%, transparent 62%)",
    accentColor: "#a78bfa",
    accentBorder: "rgba(167,139,250,0.2)",
  },
  {
    num: "03",
    icon: "◈",
    title: "Digital\nBranding",
    tagline: "Identity that makes you unforgettable.",
    copy: "Visual language built from scratch — logos, color systems, and brand guidelines that give your product a personality and make it instantly recognizable across every touchpoint.",
    deliverables: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Color & Typography",
      "Social Media Kit",
      "Landing Pages",
      "Marketing Collateral",
    ],
    visual: <BrandVisual />,
    hoverBorder: "rgba(52,211,153,0.38)",
    hoverShadow: "0 24px 60px -20px rgba(52,211,153,0.15)",
    glowBg:
      "radial-gradient(140% 120% at 50% 110%, rgba(52,211,153,0.06) 0%, transparent 62%)",
    accentColor: "#34d399",
    accentBorder: "rgba(52,211,153,0.2)",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="container-x relative py-[clamp(5rem,11vw,9rem)]"
    >
      <SectionHeader cap="Services" heading="What I build for you" />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i + 1}>
            <motion.div
              className="group relative flex flex-col overflow-hidden rounded-[20px] border border-line"
              style={{ background: "var(--card)" }}
              whileHover={{
                borderColor: s.hoverBorder,
                boxShadow: s.hoverShadow,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Visual area */}
              <div
                className="relative h-[188px] overflow-hidden"
                style={{ background: s.glowBg }}
              >
                {s.visual}

                {/* Watermark number */}
                <span
                  className="absolute right-4 top-2 select-none font-display text-[5rem] font-bold leading-none"
                  style={{ color: s.accentColor, opacity: 0.07 }}
                  aria-hidden="true"
                >
                  {s.num}
                </span>

                {/* Icon chip */}
                <span
                  className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border text-[0.9rem] font-bold backdrop-blur-sm"
                  style={{
                    borderColor: s.accentBorder,
                    color: s.accentColor,
                    background: "rgba(8,13,23,0.75)",
                  }}
                >
                  {s.icon}
                </span>
              </div>

              {/* Accent divider */}
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${s.accentColor}28 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div
                  className="mb-2 font-mono text-[0.67rem] tracking-[0.18em] uppercase"
                  style={{ color: s.accentColor, opacity: 0.8 }}
                >
                  {s.tagline}
                </div>
                <h3 className="mb-3 whitespace-pre-line font-display text-[1.48rem] font-medium leading-[1.12] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mb-5 flex-1 text-[0.87rem] leading-[1.58] text-text-dim">
                  {s.copy}
                </p>
                <div className="flex flex-wrap gap-[0.45rem]">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border px-[0.65rem] py-[0.3rem] text-[0.7rem] font-medium text-text-faint"
                      style={{ borderColor: "rgba(148,173,210,0.12)" }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
