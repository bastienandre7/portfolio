import { Gauge, MessageCircle, Palette, Search } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const pillars = [
  {
    icon: Palette,
    title: "Design sur mesure",
    description:
      "Une identité qui reflète réellement votre entreprise, plutôt qu'un modèle générique.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Un site rapide et fluide, pensé pour offrir une excellente expérience sur mobile comme sur ordinateur.",
  },
  {
    icon: Search,
    title: "Visibilité",
    description:
      "Une base SEO solide pour être trouvé plus facilement sur Google, notamment localement.",
  },
  {
    icon: MessageCircle,
    title: "Accompagnement",
    description:
      "Un interlocuteur unique du premier échange à la mise en ligne de votre site.",
  },
];

const stack = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiVercel, label: "Vercel" },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative overflow-hidden py-24 md:py-28 bg-[#F2EDE4]"
    >
      {/* Halo décoratif */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#C97A3D]/[0.035] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5E6B52]">
            Expertise
          </p>

          <h2
            id="expertise-heading"
            className="text-4xl leading-[1.08] tracking-tight text-[#1F2A1F] md:text-5xl"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
            }}
          >
            Un site pensé pour votre activité,{" "}
            <span className="font-normal italic text-[#C97A3D]">
              pas pour un template.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#5B6152] md:text-base">
            Chaque projet est conçu autour de vos objectifs : inspirer
            confiance, être visible et transformer vos visiteurs en clients.
          </p>
        </div>

        {/* Les 4 piliers */}
        <ul className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#E4DACB] bg-[#E4DACB] shadow-[0_15px_40px_rgba(31,42,31,0.025)] sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="group relative flex flex-col items-start bg-white p-7 transition-colors duration-300 hover:bg-[#FCFBF8] md:p-9"
            >
              {/* Numéro */}
              <span className="absolute right-7 top-7 text-[10px] font-medium tracking-[0.15em] text-[#B8B1A4] md:right-9 md:top-9">
                0{index + 1}
              </span>

              {/* Icône */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#5E6B52]/15 bg-[#EFF1E9] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#5E6B52]/25 group-hover:shadow-sm">
                <Icon
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#5E6B52]"
                  aria-hidden="true"
                />
              </div>

              {/* Contenu */}
              <h3
                className="mb-2 text-lg text-[#1F2A1F]"
                style={{
                  fontWeight: 500,
                }}
              >
                {title}
              </h3>

              <p className="max-w-sm text-sm font-light leading-relaxed text-[#5B6152]">
                {description}
              </p>

              {/* Ligne décorative au hover */}
              <div
                className="absolute bottom-0 left-7 h-px w-0 bg-[#C97A3D] transition-all duration-500 group-hover:w-12 md:left-9"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-12">
          <div className="mb-5 flex items-center gap-4">
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5E6B52]">
              Technologies
            </span>

            <div className="h-px flex-1 bg-[#E4DACB]" aria-hidden="true" />

            <span className="hidden text-[10px] font-light text-[#9A9488] sm:block">
              Modernes & durables
            </span>
          </div>

          <ul className="grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#E4DACB] bg-[#E4DACB] sm:grid-cols-4">
            {stack.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex items-center justify-center gap-2.5 bg-white py-5 transition-colors duration-300 hover:bg-[#FCFBF8]"
              >
                <Icon
                  size={20}
                  className="text-[#5E6B52] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium tracking-wide text-[#1F2A1F]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
