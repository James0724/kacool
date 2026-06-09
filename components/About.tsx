"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "./Reveal";
import { aboutText, aboutAccentWords, stats } from "@/lib/data";

const DIM = "rgba(159,176,201,0.28)";
const LIT = "rgb(234,241,251)";
const ACCENT = "rgb(56,189,248)";

function Word({
  word,
  index,
  total,
  progress,
  accent,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  accent: boolean;
}) {
  const start = index / total;
  const end = (index + 0.8) / total;
  const color = useTransform(progress, [start, end], [DIM, accent ? ACCENT : LIT]);
  return (
    <motion.span style={{ color }}>
      {word}
      {index < total - 1 ? " " : ""}
    </motion.span>
  );
}

export function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = aboutText.split(" ");
  const accentSet = new Set(aboutAccentWords.map((w) => w.toLowerCase()));

  return (
    <section id="about" className="container-x relative py-[clamp(5rem,11vw,9rem)]">
      <Reveal as="div" className="ed-cap !mb-[2.4rem]">
        About me
      </Reveal>

      <p
        ref={ref}
        className="max-w-[24ch] text-balance font-display text-[clamp(1.7rem,4.2vw,3.4rem)] font-medium leading-[1.22] tracking-[-0.015em]"
      >
        {words.map((w, i) => (
          <Word
            key={`${w}-${i}`}
            word={w}
            index={i}
            total={words.length}
            progress={scrollYProgress}
            accent={accentSet.has(w.toLowerCase())}
          />
        ))}
      </p>

      <Reveal delay={2} className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-none">
              {s.n}
              {s.suffix && <span className="text-accent">{s.suffix}</span>}
            </div>
            <div className="mt-[0.45rem] text-[0.85rem] text-text-faint">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
