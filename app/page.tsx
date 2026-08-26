import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden rounded-b-[2.5rem] bg-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
