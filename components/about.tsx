import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";

export default function About() {
  const resumeParcours = [
    {
      date: "2026 - Présent",
      title: "Développeur Web Freelance",
      isExp: true,
    },
    {
      date: "2024 - 2025",
      title: "Indépendant (Produits Tech & Starter Kits)",
      isExp: true,
    },
    {
      date: "2022 - 2024",
      title: "Spécialisation Web & Back-End (.NET)",
      isExp: false,
    },
  ];

  const valeurs = [
    "Compréhension précise du besoin",
    "Transparence & communication",
    "Code maintenable et performant",
  ];

  return (
    <section id="about" className="bg-white py-24 text-[#1F2A1F] md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#5E6B52]">
              À propos de moi
            </p>
            <h2 className="max-w-md text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2A1F] sm:text-5xl">
              L’humain derrière <span className="text-[#C97A3D]">le code.</span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#1F2A1F]/75 sm:text-xl">
              Je m’appelle Bastien, développeur web freelance, et j’ai construit
              mon parcours autour d’une envie simple : créer des expériences
              numériques utiles et bien pensées.
            </p>
            <p className="mt-5 text-base leading-7 text-[#1F2A1F]/60 sm:text-lg">
              Ce qui me motive, c’est de transformer une idée parfois complexe
              en une solution claire, élégante et accessible.
            </p>
            <p className="mt-5 text-base leading-7 text-[#1F2A1F]/60 sm:text-lg">
              J’aborde chaque projet avec curiosité, méthode et attention aux
              détails, du premier échange jusqu’aux dernières lignes de code.
            </p>
            <p className="mt-5 text-base leading-7 text-[#1F2A1F]/60 sm:text-lg">
              Mon objectif : livrer un site rapide, maintenable et fidèle à
              l’identité de chaque entreprise.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[#1F2A1F]/10 pt-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5E6B52] sm:text-xs sm:tracking-[0.25em]">
              Parcours
            </p>
            <div className="relative ml-1 space-y-7 border-l border-[#1F2A1F]/15 pl-5 sm:ml-2 sm:space-y-8 sm:pl-6">
              {resumeParcours.map((item, index) => (
                <div key={index} className="group relative">
                  {/* Badge Icon */}
                  <div className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#E4DACB] bg-white text-[#1F2A1F]/70 shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:border-[#5E6B52] group-hover:bg-[#5E6B52] group-hover:text-white sm:-left-[37px] sm:h-7 sm:w-7">
                    {item.isExp ? (
                      <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    ) : (
                      <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1F2A1F]/50 sm:text-[11px]">
                      {item.date}
                    </span>
                    <h3 className="mt-0.5 text-sm font-medium text-[#1F2A1F] sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5E6B52] sm:text-xs">
              Philosophie de travail
            </p>
            <p className="mt-3 text-sm font-light leading-relaxed text-[#5B6152] sm:text-[15px]">
              Mon approche repose sur une logique simple : comprendre le besoin,
              proposer une solution claire et livrer un produit propre,
              performant et maintenable.
            </p>
            <ul className="mt-4 space-y-2.5">
              {valeurs.map((valeur, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 text-[11px] font-medium text-[#1F2A1F] sm:text-xs"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C97A3D]" />
                  <span>{valeur}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
