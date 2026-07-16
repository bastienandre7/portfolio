import { Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
  {
    date: "2026 - Présent",
    title: "Développeur Web Freelance Next.js / React",
    subtitle: "Bastien Andre Dev — Uzès / À distance",
    description:
      "Accompagnement des entreprises et créatifs dans la conception d'applications web modernes, fluides et performantes. Spécialisé dans l'écosystème React et l'architecture App Router de Next.js.",
    category: "experience",
  },
  {
    date: "2024 - 2025",
    title: "Édition de Produits Tech & Création de Starter Kits",
    subtitle: "Projet Indépendant (Solopreneur)",
    description:
      "Conception, développement et commercialisation de boîtiers de démarrage (starter kits), composants réutilisables et templates premium Next.js à destination des développeurs et entrepreneurs.",
    category: "experience",
  },
  {
    date: "2023 - 2024",
    title: "Spécialisation Back-End .NET (Cursus)",
    subtitle: "OpenClassrooms",
    description:
      "Immersion dans l'ingénierie back-end : développement d'architectures robustes, programmation orientée objet (C#), sécurité des API et gestion de bases de données relationnelles complexes.",
    category: "education",
  },
  {
    date: "2022 - 2023",
    title: "Titre Certifié – Développeur Intégrateur Web",
    subtitle: "OpenClassrooms (Diplôme validé)",
    description:
      "Validation des compétences fondamentales du web : intégration responsive d'interfaces graphiques, optimisation SEO, accessibilité, manipulation du DOM en JavaScript et gestion de projets de développement.",
    category: "education",
  },
];

export default function Parcours() {
  return (
    <section
      id="parcours"
      className="relative bg-[#132018] text-[#F4F6F2] py-24 md:py-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #ffffff 0, transparent 45%), radial-gradient(circle at 80% 70%, #ffffff 0, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl w-full px-6">
        <div className="space-y-4 mb-16 md:mb-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8FBF a1]/0 hidden" />
          <p className="text-xs font-semibold uppercase tracking-wider text-[#9FCBAE]">
            Mon Histoire
          </p>
          <h2
            className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#F4F6F2]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Parcours &{" "}
            <span className="italic text-[#9FCBAE] font-normal">
              Expériences.
            </span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 md:space-y-16">
          {timelineEvents.map((event, index) => {
            const IsExp = event.category === "experience";

            return (
              <div key={index} className="relative pl-8 md:pl-10 group">
                <div className="md:absolute md:left-[-140px] md:top-1.5 md:w-28 md:text-right mb-2 md:mb-0">
                  <span className="text-xs font-semibold tracking-wider text-[#F4F6F2]/50 group-hover:text-[#9FCBAE] transition-colors duration-300">
                    {event.date}
                  </span>
                </div>

                <div className="absolute left-[-13px] top-1 w-6 h-6 rounded-full bg-[#132018] border border-white/15 flex items-center justify-center shadow-sm group-hover:border-[#9FCBAE] group-hover:bg-[#1D3226] transition-all duration-500">
                  {IsExp ? (
                    <Briefcase
                      size={11}
                      className="text-[#F4F6F2]/60 group-hover:text-[#9FCBAE] transition-colors"
                    />
                  ) : (
                    <GraduationCap
                      size={12}
                      className="text-[#F4F6F2]/60 group-hover:text-[#9FCBAE] transition-colors"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-medium text-[#F4F6F2] tracking-tight">
                      {event.title}
                    </h3>

                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        IsExp
                          ? "bg-[#1D3226] border-[#9FCBAE]/20 text-[#9FCBAE]"
                          : "bg-white/5 border-white/10 text-[#F4F6F2]/70"
                      }`}
                    >
                      {IsExp ? "Expérience" : "Formation"}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#F4F6F2]/50">
                    {event.subtitle}
                  </p>

                  <p className="text-sm text-[#F4F6F2]/70 font-light leading-relaxed max-w-2xl pt-1">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
