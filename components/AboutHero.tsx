"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function AboutHero() {
  return (
    <section className="container-x relative flex min-h-screen flex-col items-center justify-center gap-16 pb-12 pt-28 md:flex-row md:gap-20">
      {/* ── Text ── */}
      <div className="order-2 flex-1 md:order-1">
        <Reveal className="ed-cap">About me</Reveal>

        <Reveal
          as="h1"
          delay={1}
          className="mt-0 max-w-[14ch] text-balance font-display text-[clamp(2.8rem,5.8vw,5rem)] font-medium leading-[1.02] tracking-[-0.025em]"
        >
          I build digital products people{" "}
          <em className="not-italic gradient-text">love to use.</em>
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="mt-6 max-w-[48ch] text-[clamp(0.95rem,1.3vw,1.08rem)] leading-[1.65] text-text-dim"
        >
          I&apos;m James Kahoro — a full-stack developer and designer based in
          Nairobi, Kenya, working with clients across East Africa and beyond. I
          bring both the technical depth and the design sensibility to ship
          products that are fast, beautiful, and built to last.
        </Reveal>

        <Reveal delay={3} className="mt-8 flex flex-wrap items-center gap-4">
          <span className="pill">
            <span className="dot-live" /> Available for work
          </span>
          <span className="flex items-center gap-1.5 text-[0.84rem] text-text-faint">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Nairobi, Kenya
          </span>
        </Reveal>
      </div>

      {/* ── Photo ── */}
      <Reveal delay={2} className="order-1 shrink-0 self-center md:order-2">
        <div className="relative mx-8">
          {/* Ambient glow */}
          <div
            className="absolute inset-4 rounded-3xl blur-3xl"
            style={{ background: "rgba(56,189,248,0.07)" }}
            aria-hidden="true"
          />
          {/* Outer decorative ring */}
          <div
            className="absolute -inset-3 rounded-[30px] border border-dashed"
            style={{ borderColor: "rgba(56,189,248,0.1)" }}
            aria-hidden="true"
          />

          {/* Photo */}
          <motion.div
            className="relative overflow-hidden rounded-[22px] border border-line-strong"
            style={{ width: "clamp(230px,30vw,340px)", aspectRatio: "3/4" }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kahosh.png"
              alt="James Kahoro"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 16%" }}
            />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
          </motion.div>

          {/* Floating badge — top left */}
          <motion.div
            className="absolute -left-6 top-10 z-10 rounded-2xl border border-line-strong px-4 py-3 shadow-2xl"
            style={{
              background: "rgba(14,22,38,0.92)",
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-display text-[1.55rem] font-semibold leading-none">
              <Counter from={0} to={5} animationOptions={{ duration: 1 }} />+
            </div>
            <div className="mt-1 text-[0.68rem] uppercase tracking-wider text-text-faint">
              Years exp.
            </div>
          </motion.div>

          {/* Floating badge — bottom right */}
          <motion.div
            className="absolute -right-6 bottom-16 z-10 rounded-2xl border border-line-strong px-4 py-3 shadow-2xl"
            style={{
              background: "rgba(14,22,38,0.92)",
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="font-display text-[1.55rem] font-semibold leading-none">
              <Counter from={0} to={30} animationOptions={{ duration: 1 }} />+
            </div>
            <div className="mt-1 text-[0.68rem] uppercase tracking-wider text-text-faint">
              Projects
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
