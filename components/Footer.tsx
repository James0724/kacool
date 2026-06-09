import { LinkedIn, GitHub, Mail } from "./icons";
import { socials } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-wrap items-center justify-between gap-6">
        <p className="text-[0.85rem] text-text-faint">
          © {year} James Kahoro. All rights reserved.
        </p>
        <div className="flex gap-[0.6rem]">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-line bg-elev-1 text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <LinkedIn />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-line bg-elev-1 text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <GitHub />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-line bg-elev-1 text-text-dim transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
