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
      className="bg-[#FAFBF9] text-[#14171C] py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl w-full px-6">
        {/* En-tête de section */}
        <div className="space-y-4 mb-16 md:mb-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
            Mon Histoire
          </p>
          <h2
            className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#14171C]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Parcours &{" "}
            <span className="italic text-[#2F6B4F] font-normal">
              Expériences.
            </span>
          </h2>
        </div>

        {/* Conteneur de la Frise Chronologique */}
        <div className="relative border-l border-[#E4E6E0] ml-4 md:ml-32 space-y-12 md:space-y-16">
          {timelineEvents.map((event, index) => {
            const IsExp = event.category === "experience";

            return (
              <div key={index} className="relative pl-8 md:pl-10 group">
                {/* Date alignée à gauche sur grand écran, au-dessus sur mobile */}
                <div className="md:absolute md:left-[-140px] md:top-1.5 md:w-28 md:text-right mb-2 md:mb-0">
                  <span className="text-xs font-semibold tracking-wider text-[#5B6168]/70 group-hover:text-[#2F6B4F] transition-colors duration-300">
                    {event.date}
                  </span>
                </div>

                {/* Le Point/Icône sur la ligne verticale */}
                <div className="absolute left-[-13px] top-1 w-6 h-6 rounded-full bg-white border border-[#E4E6E0] flex items-center justify-center shadow-sm group-hover:border-[#2F6B4F] group-hover:bg-[#EAF1EC] transition-all duration-500">
                  {IsExp ? (
                    <Briefcase
                      size={11}
                      className="text-[#5B6168] group-hover:text-[#2F6B4F] transition-colors"
                    />
                  ) : (
                    <GraduationCap
                      size={12}
                      className="text-[#5B6168] group-hover:text-[#2F6B4F] transition-colors"
                    />
                  )}
                </div>

                {/* Contenu textuel */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-medium text-[#14171C] tracking-tight">
                      {event.title}
                    </h3>

                    {/* Petit Badge explicatif */}
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                        IsExp
                          ? "bg-[#EAF1EC] border-[#2F6B4F]/10 text-[#2F6B4F]"
                          : "bg-[#FAFBF9] border-[#E4E6E0] text-[#5B6168]"
                      }`}
                    >
                      {IsExp ? "Expérience" : "Formation"}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-[#5B6168]/80">
                    {event.subtitle}
                  </p>

                  <p className="text-sm text-[#5B6168] font-light leading-relaxed max-w-2xl pt-1">
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
