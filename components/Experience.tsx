import { Reveal } from "./Reveal";
import { experience } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section className="container-x py-[clamp(4rem,9vw,7rem)]">
      <SectionHeader
        cap="Experience"
        heading="Where I've built and shipped"
        description="A curated selection showcasing my expertise and the results achieved."
        className="mb-10"
      />

      <div className="relative mt-14">
        {/* Vertical timeline line */}
        <div
          className="absolute bottom-0 top-3 w-px md:left-[126px]"
          style={{
            left: "5px",
            background:
              "linear-gradient(180deg, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0.08) 70%, transparent 100%)",
          }}
        />

        <div className="flex flex-col gap-0">
          {experience.map((item, i) => (
            <Reveal
              key={item.period}
              delay={i + 1}
              className="relative pb-12 pl-10 md:pl-[172px]"
            >
              {/* Timeline circle */}
              <div
                className="absolute top-[0.35rem] flex h-[11px] w-[11px] items-center justify-center rounded-full border-2 border-accent md:left-[121px]"
                style={{ left: "0px", background: "var(--bg)" }}
              />

              {/* Period label */}
              <div className="mb-3 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-accent md:absolute md:left-0 md:top-0 md:mb-0 md:w-[110px] md:text-right">
                {item.period}
              </div>

              {/* Content card */}
              <div className="rounded-2xl border border-line bg-card/50 p-6 transition-colors duration-300 hover:border-line-strong hover:bg-card/80">
                <h3 className="font-display text-[1.2rem] font-medium">
                  {item.role}
                </h3>
                <div
                  className="mt-1 text-[0.83rem] font-medium"
                  style={{ color: "rgba(56,189,248,0.75)" }}
                >
                  {item.company}
                </div>
                <p className="mt-3 text-[0.87rem] leading-[1.6] text-text-dim">
                  {item.description}
                </p>
                {item.highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-line px-3 py-1 text-[0.7rem] text-text-faint"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
