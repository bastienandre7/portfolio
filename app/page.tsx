import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <main className="relative z-10 isolate overflow-x-clip rounded-b-[2.5rem] bg-background">
        <div className="relative z-10">
          <Hero />
          <Projects />
          <TechStack />
          <About />
        </div>
      </main>
      <Contact />
    </>
  );
}
