"use client";

import { LettersPullUp } from "./letters-pull-up";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  cap: string;
  heading: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  cap,
  heading,
  description,
  className,
}: SectionHeaderProps) {
  if (description) {
    return (
      <div
        className={`flex flex-wrap items-end justify-between gap-8 ${className ?? ""}`}
      >
        <div>
          <div className="ed-cap">{cap}</div>
          <LettersPullUp text={heading} />
        </div>
        <Reveal
          as="p"
          delay={1}
          className="max-w-[34ch] text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-text-dim"
        >
          {description}
        </Reveal>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="ed-cap">{cap}</div>
      <LettersPullUp text={heading} />
    </div>
  );
}
