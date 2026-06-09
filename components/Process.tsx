import { LettersPullUp } from "./letters-pull-up";
import { Reveal } from "./Reveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="container-x py-[clamp(4rem,9vw,7rem)]">
      {/* Header */}
      <div className="mb-14 text-center">
        <Reveal className="ed-cap justify-center">How I Work</Reveal>
        <LettersPullUp text="A process built for results" />

        <Reveal
          as="p"
          delay={2}
          className="mx-auto mt-4 max-w-[46ch] text-[0.95rem] leading-[1.6] text-text-dim"
        >
          Every project follows a deliberate process — not rigid, but reliable —
          so the work stays on track and outcomes exceed expectations.
        </Reveal>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, i) => (
          <Reveal key={step.num} delay={i + 1}>
            <div className="group relative rounded-2xl border border-line bg-card/40 p-7 transition-all duration-300 hover:border-line-strong hover:bg-card/80">
              {/* Step number */}
              <div className="absolute right-5 top-5 font-mono text-[0.65rem] tracking-[0.14em] text-text-faint">
                {step.num}
              </div>

              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elev-1 text-xl">
                {step.icon}
              </div>

              <h3 className="mb-2 font-display text-[1.12rem] font-medium">
                {step.title}
              </h3>
              <p className="text-[0.85rem] leading-[1.6] text-text-dim">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
