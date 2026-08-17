import About from "@/components/about";
import Contact from "@/components/contact";
import Expertise from "@/components/expertise";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Expertise />
      <About />
      <Contact />
    </main>
  );
}
