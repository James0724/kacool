import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SpecialtyStrip } from "@/components/SpecialtyStrip";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Expertise, SkillChip } from "@/components/Expertise";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import SeparationMarquee from "@/components/SeparationMarquee";
import { skills } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <SpecialtyStrip />
        <About />
        <Projects />
        <Expertise />
        <SeparationMarquee />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
