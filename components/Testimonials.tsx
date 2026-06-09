"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowLeft, ArrowRight } from "./icons";
import { quotes } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  const [qi, setQi] = useState(0);

  const next = useCallback(() => setQi((i) => (i + 1) % quotes.length), []);
  const prev = useCallback(
    () => setQi((i) => (i - 1 + quotes.length) % quotes.length),
    [],
  );

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const q = quotes[qi];

  return (
    <section
      id="testimonials"
      className="container-x relative py-[clamp(5rem,11vw,9rem)]"
    >
      <SectionHeader
        cap="Testimonials"
        heading="What others say"
        description="Hear directly from those I've collaborated with, showcasing the impact of my work and the relationships I've built."
        className="mb-10"
      />

      <Reveal
        delay={1}
        className="grid grid-cols-[auto_1fr] items-start gap-[clamp(1.5rem,4vw,3rem)]"
      >
        <div className="font-display text-[clamp(4rem,9vw,8rem)] leading-[0.7] text-accent">
          &ldquo;
        </div>
        <div>
          <div className="min-h-[6.5em] sm:min-h-[4.5em]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={qi}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-balance font-display text-[clamp(1.4rem,3.2vw,2.4rem)] font-medium leading-[1.32] tracking-[-0.01em]"
              >
                {q.text}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center gap-[0.9rem]">
            <div className="grid h-[50px] w-[50px] place-items-center rounded-full border border-line-strong bg-card font-display font-semibold text-accent">
              {q.initials}
            </div>
            <div>
              <div className="font-semibold">{q.name}</div>
              <div className="text-[0.85rem] text-text-faint">{q.role}</div>
            </div>
          </div>

          <div className="mt-[2.4rem] flex items-center gap-[0.7rem]">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="ed-qbtn"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="ed-qbtn"
            >
              <ArrowRight />
            </button>
            <span className="ml-[0.6rem] inline-flex items-center gap-[0.4rem]">
              {quotes.map((_, i) => (
                <i
                  key={i}
                  className={`h-[7px] rounded-full transition-all duration-200 ${
                    i === qi ? "w-5 bg-accent" : "w-[7px] bg-line-strong"
                  }`}
                />
              ))}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
