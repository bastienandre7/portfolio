import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Projects from "@/components/projects";
import Services from "@/components/services";
import TechStack from "@/components/techstack";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Process />
      <TechStack />
      <Contact />
    </main>
  );
}
