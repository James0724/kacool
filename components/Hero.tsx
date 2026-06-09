"use client";

import { Reveal } from "./Reveal";
import { ArrowRight } from "./icons";

export function Hero() {
  return (
    <section
      id="home"
      className="container-x relative flex min-h-screen flex-col justify-center pb-12 pt-28"
    >
      {/* rotating avatar badge */}
      <Reveal className="ed-badge">
        <svg className="spin" viewBox="0 0 184 184" aria-hidden="true">
          <defs>
            <path
              id="circlePath"
              d="M92,92 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="0%">
              Full-Stack Developer · UI Engineer · Open to work ·{" "}
            </textPath>
          </text>
        </svg>
        <div className="core">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/kahosh.png" alt="James Kahoro" />
        </div>
      </Reveal>

      <Reveal className="mb-8 flex items-center gap-4">
        <span className="text-[clamp(1rem,1.6vw,1.25rem)] text-text-dim">
          <span className="inline-block origin-[70%_70%] animate-wave">👋</span>{" "}
          Hey! It&apos;s me James,
        </span>
      </Reveal>

      <Reveal
        as="h1"
        delay={1}
        className="max-w-[16ch] text-balance font-display text-[clamp(2.7rem,7.4vw,6.6rem)] font-medium leading-[0.98] tracking-[-0.025em]"
      >
        Scalable web products,{" "}
        <em className="not-italic gradient-text">designed & built</em> end to
        end.
      </Reveal>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
        <Reveal
          as="p"
          delay={2}
          className="max-w-[44ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-text-dim"
        >
          I craft dynamic, full-stack web experiences with a focus on
          performance, clean architecture, and interfaces people genuinely enjoy
          using.
        </Reveal>

        <Reveal as="div" delay={3} className="flex-shrink-0">
          <a
            href="#about"
            className="inline-flex items-center gap-[0.7rem] rounded-full bg-accent px-[1.7rem] py-4 text-[0.95rem] font-semibold text-on-accent shadow-[0_14px_36px_-12px_var(--accent-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_-14px_var(--accent-glow)]"
          >
            Know me better
            <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
