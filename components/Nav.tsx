"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Menu, Close } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* On sub-pages (e.g. /about), prefix anchor hrefs with "/" so they
     navigate back to the home page and then scroll to the section. */
  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    if (pathname === "/") return href;
    return `/${href}`;
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex justify-center px-[var(--gutter)] py-[1.1rem]">
        <div
          className={`flex w-full items-center justify-between rounded-full border py-[0.6rem] pl-[1.1rem] pr-[0.6rem] transition-all duration-[400ms] ${
            scrolled
              ? "max-w-[880px] border-line bg-[rgba(10,16,28,0.72)] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-[18px] backdrop-saturate-[1.4]"
              : "max-w-container border-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-[1.15rem] font-bold tracking-[0.16em]"
          >
            JK
            <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
          </Link>

          <nav className="hidden items-center gap-[0.15rem] md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={resolveHref(l.href)}
                className={`group relative rounded-full px-[0.85rem] py-2 text-[0.88rem] font-medium transition-colors hover:text-text ${
                  isActive(l.href) ? "text-text" : "text-text-faint"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-[0.15rem] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity ${
                    isActive(l.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-[0.6rem]">
            <Link
              href="/contact"
              className="btn btn-primary hidden md:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-[42px] w-[42px] place-items-center rounded-full border border-line-strong bg-elev-1 text-text md:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-[1.2rem] bg-[rgba(8,13,23,0.96)] backdrop-blur-[20px]"
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-elev-1 text-text"
            >
              <Close />
            </button>
            {navLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.08 }}
              >
                <Link
                  href={resolveHref(l.href)}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-[2rem] font-medium transition-colors hover:text-accent ${
                    isActive(l.href) ? "text-accent" : "text-text-dim"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
