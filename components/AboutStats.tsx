import { Reveal } from "./Reveal";
import { stats } from "@/lib/data";

export function AboutStats() {
  return (
    <section className="container-x py-[clamp(4rem,9vw,7rem)]">
      <div
        className="rounded-[28px] border border-line px-[clamp(2rem,6vw,5rem)] py-[clamp(2.5rem,5vw,4rem)]"
        style={{
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.04) 0%, transparent 60%), var(--card)",
        }}
      >
        <Reveal className="ed-cap">By the numbers</Reveal>
        <Reveal
          as="h2"
          delay={1}
          className="max-w-[22ch] text-balance font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.02em]"
        >
          Five years of shipping work that speaks for itself.
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i + 2}>
              <div
                className="font-display leading-none"
                style={{ fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 600 }}
              >
                {s.n}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="mt-2 text-[0.8rem] text-text-faint">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
