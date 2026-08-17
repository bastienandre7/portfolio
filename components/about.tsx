import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import Image from "next/image";

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
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF7F0] py-20 text-[#1F2A1F] md:py-28"
    >
      {/* Background Gradient Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, #EDE4D4 0, transparent 40%), radial-gradient(circle at 85% 75%, #E3D9C6 0, transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* En-tête de section */}
        <div className="mb-10 space-y-3 text-center md:mb-16 md:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5E6B52] sm:text-xs">
            À propos
          </p>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#1F2A1F] sm:text-4xl md:text-5xl">
            L’humain derrière{" "}
            <span className="italic text-[#C97A3D]">le code.</span>
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-8">
          {/* Colonne gauche (7 cols) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7 lg:gap-6">
            {/* Bio Card */}
            <div className="rounded-3xl border border-[#E4DACB]/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-10">
              <p className="text-lg leading-relaxed text-[#1F2A1F] sm:text-xl md:text-2xl">
                Je m’appelle{" "}
                <span className="font-serif font-semibold italic text-[#5E6B52]">
                  Bastien
                </span>
                , développeur web freelance spécialisé dans la création de sites
                modernes, rapides et pensés pour durer.
              </p>
              <p className="mt-4 text-sm font-light leading-relaxed text-[#5B6152] sm:text-base">
                Au fil de mon parcours, j’ai développé une vraie sensibilité
                pour la structure du code, l’optimisation des performances et la
                cohérence du design, afin d’aider les entreprises à gagner en
                crédibilité et en efficacité en ligne.
              </p>
            </div>

            {/* Timeline Card */}
            <div className="flex-1 rounded-3xl border border-[#E4DACB]/80 bg-[#F8F4EA]/90 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-10">
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
          </div>

          {/* Colonne droite (5 cols) */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-5 lg:gap-6">
            {/* Image Card */}
            <div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden rounded-3xl border border-[#E4DACB]/80 bg-[#F8F4EA] p-2 shadow-sm sm:min-h-[280px] lg:aspect-auto lg:min-h-[320px] lg:flex-1">
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <Image
                  src="/images/photo-profil.png"
                  alt="Portrait professionnel de Bastien Andre"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Philosophie Card */}
            <div className="rounded-3xl border border-[#E4DACB]/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5E6B52] sm:text-xs">
                Philosophie de travail
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#5B6152] sm:text-[15px]">
                Mon approche repose sur une logique simple : comprendre le
                besoin, proposer une solution claire et livrer un produit
                propre, performant et maintenable.
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
      </div>
    </section>
  );
}
