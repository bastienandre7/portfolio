import { IoSpeedometerOutline } from "react-icons/io5";
import {
  SiAuth0,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const stack = [
  {
    icon: SiNextdotjs,
    title: "Next.js",
    description:
      "Framework moderne pour créer sites rapides, optimisés pour le SEO et faciles à faire évoluer.",
  },
  {
    icon: SiReact,
    title: "React",
    description:
      "Des interfaces fluides, interactives et pensées pour offrir une excellente expérience utilisateur.",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    description:
      "Un design entièrement sur mesure, responsive et fidèle à votre identité visuelle.",
  },
  {
    icon: SiPrisma,
    title: "Prisma",
    description:
      "Gestion fiable des données avec une architecture propre et évolutive.",
  },
  {
    icon: SiAuth0,
    title: "NextAuth",
    description:
      "Connexion sécurisée, espaces membres et authentification par e-mail ou réseaux sociaux.",
  },
  {
    icon: IoSpeedometerOutline,
    title: "Performance",
    description:
      "Core Web Vitals, SEO technique et optimisation du chargement dès le développement.",
  },
];

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="bg-[#F6F1E7] text-[#1F2A1F] relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5E6B52]">
              Technologies
            </p>
            <h2
              className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#1F2A1F]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Des technologies modernes, choisies{" "}
              <span className="italic text-[#C97A3D] font-normal block">
                pour durer.
              </span>
            </h2>
          </div>

          <div className="divide-y divide-[#E4DACB]/70 border-t border-b border-[#E4DACB]/70 w-full">
            {stack.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="py-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group transition-all duration-300 relative"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF1E9] flex items-center justify-center shrink-0 border border-[#5E6B52]/15 transition-colors group-hover:bg-[#5E6B52] group-hover:text-white">
                  <Icon
                    size={18}
                    className="text-[#5E6B52] group-hover:text-white transition-colors"
                    aria-label={`${title} icon`}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-[#1F2A1F] group-hover:text-[#5E6B52] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5B6152] leading-relaxed font-light max-w-xl">
                    {description}
                  </p>
                </div>

                <div className="hidden sm:block ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#5E6B52] text-sm self-center">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
