import { Briefcase, GraduationCap } from "lucide-react";

const timelineEvents = [
  {
    date: "2026 - Présent",
    title: "Développeur Web Freelance Next.js / React",
    subtitle: "Bastien Andre Dev — Uzès / À distance",
    description:
      "Après plusieurs années en solo, j'ai choisi de mettre mon expertise au service de projets clients. Accompagnement des entreprises et créatifs dans la conception d'applications web modernes et performantes.",
    category: "experience",
  },
  {
    date: "2024 - 2025",
    title: "Édition de Produits Tech & Création de Starter Kits",
    subtitle: "Projet Indépendant (Solopreneur)",
    description:
      "Développement en autonomie, sans collaboration client, pour affiner mon expertise technique avant de me lancer en freelance. Conception et commercialisation de starter kits et templates premium Next.js.",
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
      className="relative bg-[#FAF7F0] text-[#1F2A1F] py-24 md:py-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #EDE4D4 0, transparent 45%), radial-gradient(circle at 80% 70%, #E3D9C6 0, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl w-full px-6">
        <div className="space-y-4 mb-16 md:mb-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5E6B52]">
            Mon Histoire
          </p>
          <h2
            className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#1F2A1F]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Parcours &{" "}
            <span className="italic text-[#C97A3D] font-normal">
              Expériences.
            </span>
          </h2>
        </div>

        <div className="relative border-l border-[#1F2A1F]/15 ml-4 md:ml-32 space-y-12 md:space-y-16">
          {timelineEvents.map((event, index) => {
            const IsExp = event.category === "experience";

            return (
              <div key={index} className="relative pl-8 md:pl-10 group">
                <div className="md:absolute md:left-[-140px] md:top-1.5 md:w-28 md:text-right mb-2 md:mb-0">
                  <span className="text-xs font-semibold tracking-wider text-[#1F2A1F]/50 group-hover:text-[#5E6B52] transition-colors duration-300">
                    {event.date}
                  </span>
                </div>

                <div className="absolute left-[-13px] top-1 w-6 h-6 rounded-full bg-[#FAF7F0] border border-[#1F2A1F]/15 flex items-center justify-center shadow-sm group-hover:border-[#5E6B52] group-hover:bg-[#EFF1E9] transition-all duration-500">
                  {IsExp ? (
                    <Briefcase
                      size={11}
                      className="text-[#1F2A1F]/60 group-hover:text-[#5E6B52] transition-colors"
                    />
                  ) : (
                    <GraduationCap
                      size={12}
                      className="text-[#1F2A1F]/60 group-hover:text-[#5E6B52] transition-colors"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-medium text-[#1F2A1F] tracking-tight">
                      {event.title}
                    </h3>

                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        IsExp
                          ? "bg-[#EFF1E9] border-[#5E6B52]/25 text-[#5E6B52]"
                          : "bg-[#F1E7D8] border-[#C97A3D]/20 text-[#C97A3D]"
                      }`}
                    >
                      {IsExp ? "Expérience" : "Formation"}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1F2A1F]/50">
                    {event.subtitle}
                  </p>

                  <p className="text-sm text-[#1F2A1F]/70 font-light leading-relaxed max-w-2xl pt-1">
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
