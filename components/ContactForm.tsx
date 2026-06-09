"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Reveal } from "./Reveal";
import { Mail, LinkedIn, GitHub, ArrowRight } from "./icons";
import { socials } from "@/lib/data";

type FormValues = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const contactItems = [
  {
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "James Kahoro",
    href: socials.linkedin,
    Icon: LinkedIn,
  },
  {
    label: "GitHub",
    value: "James0724",
    href: socials.github,
    Icon: GitHub,
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
    Icon: null,
  },
] as const;

const inputBase =
  "w-full rounded-xl border bg-[var(--elev-1)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-faint)] transition-colors duration-200 focus:outline-none focus:ring-0";
const inputDefault = "border-[var(--line-strong)] focus:border-[var(--accent)]";
const inputError = "border-red-500/50 focus:border-red-400";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-400">{message}</p>;
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-faint)]"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const subject = encodeURIComponent(
      `[Portfolio] ${data.service || "Project Inquiry"} — ${data.name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Service: ${data.service || "Not specified"}`,
        `Budget: ${data.budget || "Not specified"}`,
        ``,
        data.message,
      ].join("\n"),
    );
    const a = document.createElement("a");
    a.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    a.click();
    setSubmitted(true);
    reset();
  };

  return (
    <div className="container-x pt-[7rem] pb-[6rem]">
      {/* Page header */}
      <div className="mb-[4.5rem] max-w-[600px]">
        <Reveal className="mb-6">
          <span className="ed-cap">Get in touch</span>
        </Reveal>

        <Reveal
          as="h1"
          delay={1}
          className="mb-6 font-display text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em]"
        >
          Let&apos;s work{" "}
          <em className="not-italic gradient-text">together.</em>
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="text-[1.05rem] leading-relaxed text-[var(--text-dim)]"
        >
          Have a project in mind, a question, or just want to say hello? Fill in
          the form and I&apos;ll get back to you within 24 hours.
        </Reveal>
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 items-start gap-[3.5rem] lg:grid-cols-[1fr_1.5fr] lg:gap-[6rem]">
        {/* ── Left: Contact info ── */}
        <Reveal delay={1}>
          <div>
            <div className="mb-8">
              <span className="pill">
                <span className="dot-live" /> Available for new projects
              </span>
            </div>

            <div className="mb-10 flex flex-col gap-3">
              {contactItems.map(({ label, value, href, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--elev-1)] px-5 py-4"
                >
                  {Icon && (
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--line-strong)] bg-[var(--elev-2)] text-[var(--accent)]">
                      <Icon width={16} height={16} />
                    </span>
                  )}
                  {!Icon && (
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[var(--line-strong)] bg-[var(--elev-2)] text-[var(--text-faint)]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </span>
                  )}
                  <div>
                    <p className="mb-0.5 font-mono text-[0.7rem] uppercase tracking-widest text-[var(--text-faint)]">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[0.95rem] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[0.95rem] text-[var(--text)]">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-[var(--elev-1)] px-5 py-4">
              <p className="mb-1 font-mono text-[0.7rem] uppercase tracking-widest text-[var(--text-faint)]">
                Response time
              </p>
              <p className="text-[0.95rem] text-[var(--text-dim)]">
                Usually within{" "}
                <strong className="font-semibold text-[var(--text)]">
                  24 hours
                </strong>{" "}
                on weekdays.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Right: Contact form ── */}
        <Reveal delay={2}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div className="mb-2 grid h-16 w-16 place-items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--accent)]"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-medium">
                Email client opened!
              </h2>
              <p className="max-w-[34ch] text-[var(--text-dim)]">
                Your message has been prepared in your email client. Hit send
                and I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-ghost mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-widest text-[var(--text-faint)]">
                  Name <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className={`${inputBase} ${errors.name ? inputError : inputDefault}`}
                  {...register("name", { required: "Name is required" })}
                />
                <FieldError message={errors.name?.message} />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-widest text-[var(--text-faint)]">
                  Email <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? inputError : inputDefault}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                <FieldError message={errors.email?.message} />
              </div>

              {/* Service + Budget */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-widest text-[var(--text-faint)]">
                    Service
                  </label>
                  <div className="relative">
                    <select
                      className={`${inputBase} ${inputDefault} cursor-pointer appearance-none pr-10`}
                      style={{ backgroundColor: "var(--card)" }}
                      {...register("service")}
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI / UX Design">UI / UX Design</option>
                      <option value="Branding">Branding</option>
                      <option value="Full-Stack App">Full-Stack App</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-widest text-[var(--text-faint)]">
                    Budget
                  </label>
                  <div className="relative">
                    <select
                      className={`${inputBase} ${inputDefault} cursor-pointer appearance-none pr-10`}
                      style={{ backgroundColor: "var(--card)" }}
                      {...register("budget")}
                    >
                      <option value="">Select a range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-widest text-[var(--text-faint)]">
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project, goals, and timeline…"
                  className={`${inputBase} ${errors.message ? inputError : inputDefault} resize-none`}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 20,
                      message: "Please write at least 20 characters",
                    },
                  })}
                />
                <FieldError message={errors.message?.message} />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-[0.8rem] rounded-full bg-[var(--accent)] px-[2rem] py-[1.1rem] text-[1rem] font-semibold text-[var(--on-accent)] shadow-[0_16px_40px_-14px_var(--accent-glow)] transition-all duration-200 hover:-translate-y-[3px] hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Opening mail client…" : "Send message"}
                  <ArrowRight width={18} height={18} />
                </button>
                <p className="text-[0.8rem] text-[var(--text-faint)]">
                  No spam, ever.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
