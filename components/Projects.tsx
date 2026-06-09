"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, ArrowRight } from "./icons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="container-x relative py-[clamp(5rem,11vw,9rem)]"
    >
      <SectionHeader
        cap="My work"
        heading="Selected projects"
        description="A curated selection showcasing my expertise and the results achieved."
        className="mb-10"
      />

      <div className="border-t border-line">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) + 1}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ed-proj"
            >
              <span className="font-mono text-[0.85rem] text-text-faint">
                0{i + 1}
              </span>
              <span className="pt">{p.title}</span>
              <span className="ptag flex gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="whitespace-nowrap rounded-full border border-line px-[0.7rem] py-[0.3rem] text-[0.74rem] text-text-faint"
                  >
                    {t}
                  </span>
                ))}
              </span>
              <span className="font-mono text-[0.85rem] text-text-faint">
                {p.year}
              </span>
              <span className="parrow">
                <ArrowUpRight />
              </span>
              <span className="pthumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" loading="lazy" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="flex mt-10 items-center justify-center group">
        <a href="#contact" className="btn btn-ghost group">
          Start a project together
          <ArrowRight className="group-hover:translate-x-1 transition-transform group-hover:text-accent" />
        </a>
      </div>
    </section>
  );
}
