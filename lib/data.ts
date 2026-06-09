/* ============================================================
   Content / data for the portfolio.
   Editing copy, projects, skills, or testimonials? Do it here.
   ============================================================ */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const specialties = [
  "Websites",
  "Development",
  "UI / UX Design",
  "Branding",
  "Animations",
  "Web Apps",
  "SaaS",
];

export const aboutText =
  "I'm James Kahoro, a full-stack developer with 5+ years building high-quality, impactful digital experiences. I partner with founders and teams to ship products that are fast, scalable, and a joy to use.";

export const aboutAccentWords = ["full-stack", "high-quality,", "scalable,"];

export const stats = [
  { n: "5", suffix: "+", label: "Years of experience" },
  { n: "30", suffix: "+", label: "Projects delivered" },
  { n: "17", suffix: "", label: "Technologies mastered" },
  { n: "100", suffix: "%", label: "Client satisfaction" },
];

export type Project = {
  title: string;
  tags: string[];
  year: string;
  img: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Divine Travel Nest Safaris",
    tags: ["Development", "Design"],
    year: "2024",
    img: "/images/divine.png",
    href: "https://divinetravelnestsafaris.com/",
  },
  {
    title: "247 Cybercafé",
    tags: ["Development", "Design"],
    year: "2022",
    img: "/images/cyber.png",
    href: "https://247cybercafepro.netlify.app/",
  },
  {
    title: "Vicbon Interiors",
    tags: ["Development", "Design"],
    year: "2020",
    img: "/images/vicbon.png",
    href: "https://vicboninteriors.netlify.app/",
  },
  {
    title: "Endless Plains Safaris",
    tags: ["Development", "Design"],
    year: "2021",
    img: "/images/endless.png",
    href: "https://endlessplainsafaris.netlify.app/",
  },
];

export type Expertise = {
  num: string;
  title: string;
  copy: string;
  img: string;
};

export const expertise: Expertise[] = [
  {
    num: "01",
    title: "Development",
    copy: "Responsive, accessible web apps built with React, Next.js, and Node — fast and engaging on every device.",
    img: "/images/development.jpg",
  },
  {
    num: "02",
    title: "UI / UX Design",
    copy: "User-focused interfaces that shape how audiences discover, understand, and engage with the product.",
    img: "/images/design.jpg",
  },
  {
    num: "03",
    title: "Branding",
    copy: "Cohesive identities — personality, voice, and visual language that make products memorable.",
    img: "/images/brand.jpg",
  },
];

export const skills: { name: string; icon: string }[] = [
  { name: "HTML", icon: "/skills/HTML.svg" },
  { name: "CSS", icon: "/skills/CSS.svg" },
  { name: "JavaScript", icon: "/skills/JavaScript.svg" },
  { name: "TypeScript", icon: "/skills/TypeScript.svg" },
  { name: "React.js", icon: "/skills/React.js.svg" },
  { name: "Next.js", icon: "/skills/Next.js.svg" },
  { name: "Redux", icon: "/skills/Redux.svg" },
  { name: "Node.js", icon: "/skills/Node.js.svg" },
  { name: "Express.js", icon: "/skills/Express.js.svg" },
  { name: "MongoDB", icon: "/skills/MongoDB.svg" },
  { name: "PostgreSQL", icon: "/skills/PostgreSQL.svg" },
  { name: "Docker", icon: "/skills/Docker.svg" },
  { name: "Firebase", icon: "/skills/Firebase.svg" },
  { name: "Framer Motion", icon: "/skills/FramerMotion.svg" },
  { name: "Tailwind CSS", icon: "/skills/TailwindCSS.svg" },
  { name: "Figma", icon: "/skills/Figma.svg" },
  { name: "GIT", icon: "/skills/GIT.svg" },
];

export type Quote = {
  text: string;
  name: string;
  role: string;
  initials: string;
};

export const quotes: Quote[] = [
  {
    text: "James has an exceptional ability to translate ideas into clean, performant interfaces. Every delivery was ahead of schedule and beyond expectation.",
    name: "Vritika N.",
    role: "Regional Head @ GirlScript",
    initials: "VN",
  },
  {
    text: "His design proficiency is remarkable — consistently top-notch work that elevates the user experience. A genuine asset on any product team.",
    name: "Amrit Raj",
    role: "Senior Developer @ Ignite",
    initials: "AR",
  },
  {
    text: "Strong technical skills paired with a collaborative attitude. James played a pivotal role in building the application from the ground up.",
    name: "Divya Walia",
    role: "Senior Developer @ Nagarro",
    initials: "DW",
  },
  {
    text: "Beyond his technical prowess, what sets James apart is his keen eye and the questions he asks that elevate the entire team's output.",
    name: "Elavarasan M.",
    role: "Technical Lead @ Ignite",
    initials: "EM",
  },
];

export const socials = {
  email: "jameskahoro07@gmail.com",
  linkedin: "https://www.linkedin.com/in/james-kahoro/",
  github: "https://github.com/James0724",
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2022 — Present",
    role: "Senior Full-Stack Developer",
    company: "Freelance / Remote",
    description:
      "Designing and shipping complete web products for clients across East Africa and globally. Full ownership from architecture to deployment — APIs, databases, UIs, and brand.",
    highlights: ["Divine Travel Nest Safaris", "SaaS platforms", "Remote-first workflow"],
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Agencies & Startups",
    description:
      "Built responsive frontends and complete client implementations for business websites, interior design portfolios, and hospitality platforms.",
    highlights: ["Vicbon Interiors (2020)", "Endless Plains Safaris (2021)", "247 Cybercafé (2022)"],
  },
  {
    period: "2019 — 2020",
    role: "Self-Taught Web Developer",
    company: "Personal Projects & Open Source",
    description:
      "Immersed in web fundamentals — HTML, CSS, JavaScript, and React. Built personal projects, contributed to open source, and landed first freelance contracts.",
    highlights: ["Mastered React ecosystem", "First freelance income", "Foundation in web standards"],
  },
];

export type ProcessStep = {
  num: string;
  icon: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery",
    description:
      "A deep-dive into your goals, users, and constraints. I ask the questions that surface what truly matters before a single line of code is written.",
  },
  {
    num: "02",
    icon: "✏️",
    title: "Design",
    description:
      "Wireframes evolve into high-fidelity prototypes. We align on visual direction, user flows, and component architecture before committing to build.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Build",
    description:
      "Iterative, tested, and transparent. I ship working increments so you see progress — no black boxes. Code is written to be maintained, not just to run.",
  },
  {
    num: "04",
    icon: "🧪",
    title: "Review & QA",
    description:
      "Every interaction tested across devices and edge cases. Performance profiled, accessibility checked, and the product stress-tested before users touch it.",
  },
  {
    num: "05",
    icon: "🚀",
    title: "Launch",
    description:
      "Deployed with CI/CD, analytics in place, and DNS configured. Launch day is smooth because we rehearsed it. Post-launch support comes included.",
  },
];
