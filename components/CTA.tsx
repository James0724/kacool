"use client";

import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";
import { socials } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="contact"
      className="container-x relative py-[clamp(6rem,14vw,11rem)] text-center"
    >
      <div className="ed-glow" aria-hidden="true" />

      <Reveal className="mb-8 inline-block">
        <span className="pill">
          <span className="dot-live" /> Available for work
        </span>
      </Reveal>

      <Reveal
        as="h2"
        delay={1}
        className="text-balance font-display text-[clamp(2.6rem,9vw,7.5rem)] font-medium leading-[0.96] tracking-[-0.03em]"
      >
        Let&apos;s create your
        <br />
        <em className="not-italic text-accent">next big idea.</em>
      </Reveal>

      <Reveal as="div" delay={2}>
        <a
          href={`mailto:${socials.email}`}
          className="mt-[2.6rem] inline-flex items-center gap-[0.8rem] rounded-full bg-accent px-[2.1rem] py-[1.15rem] text-[1.05rem] font-semibold text-on-accent shadow-[0_16px_40px_-14px_var(--accent-glow)] transition-transform duration-200 hover:-translate-y-[3px]"
        >
          Contact me
          <ArrowRight width={18} height={18} />
        </a>
      </Reveal>
    </section>
  );
}
