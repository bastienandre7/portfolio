import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    type: "Application web · Concept",
    title: "Prism",
    description:
      "Une plateforme e-commerce complète avec catalogue, gestion des stocks, paiement Stripe et espace d'administration.",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "Stripe", icon: SiStripe },
      { label: "Node.js", icon: FaNodeJs },
    ],
    image: "/projects/prism.png",
    link: "https://prism-fullstack-ecommerce-app.vercel.app/",
    github: "https://github.com/bastienandre7/prism-ecommerce",
  },
  {
    type: "Site vitrine · Concept",
    title: "Braise",
    description:
      "Une identité élégante et éditoriale pour un restaurant gastronomique, pensée pour mettre en valeur sa cuisine et faciliter la réservation.",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
    ],
    image: "/projects/braise-1.png",
    link: "https://braise-restaurant.netlify.app/",
    github: "https://github.com/bastienandre7/braise-restaurant",
  },
  {
    type: "Application web · Concept",
    title: "Evines",
    description:
      "Un starter SaaS fullstack conçu pour poser les bases d’une application moderne avec authentification, abonnements Stripe, gestion de données et dashboard.",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Stripe", icon: SiStripe },
    ],
    image: "/projects/evines-1.png",
    link: "https://evines-saas-platform-full-solution.vercel.app/",
    github: "https://github.com/bastienandre7/evines-saas",
  },
];

export default function Projects() {
  return (
    <section
      id="projets"
      aria-labelledby="projects-heading"
      className="bg-white py-24 text-[#1F2A1F] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#5E6B52]">
            Selected projects
          </p>

          <h2
            id="projects-heading"
            className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2A1F] sm:text-5xl"
          >
            Des projets pensés pour être vus, compris et utilisés.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#1F2A1F]/60 sm:text-lg">
            Une sélection de projets où le design, la technique et les objectifs
            du client avancent dans la même direction.
          </p>
        </div>

        <div className="grid gap-16 md:gap-24">
          {projects.map(
            (
              { type, title, description, tags, image, link, github },
              index,
            ) => (
              <article
                key={title}
                className="group grid gap-8 border-t border-[#1F2A1F]/10 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le projet ${title}`}
                  className="relative block aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#EDE4D4]"
                >
                  <Image
                    src={image}
                    alt={`Aperçu du projet ${title}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />

                  <div className="absolute inset-0 bg-[#1F2A1F]/0 transition-colors duration-500 group-hover:bg-[#1F2A1F]/5" />

                  <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/50 bg-white/90 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#1F2A1F]"
                    />
                  </div>
                </a>

                <div>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5E6B52]">
                      {type}
                    </span>

                    <span className="text-sm text-[#1F2A1F]/35">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium leading-tight tracking-[-0.03em] text-[#1F2A1F] sm:text-4xl">
                    {title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-7 text-[#1F2A1F]/60">
                    {description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {tags.map(({ label, icon: TagIcon }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-2 rounded-full border border-[#1F2A1F]/10 px-3 py-1.5 text-xs font-medium text-[#1F2A1F]/65"
                      >
                        <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#1F2A1F]/10 pt-5">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F2A1F] transition-colors hover:text-[#C97A3D]"
                    >
                      Voir le projet
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F2A1F]/55 transition-colors hover:text-[#1F2A1F]"
                    >
                      <FaGithub className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[#1F2A1F]/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-lg font-medium tracking-[-0.02em]">
            Votre projet pourrait être le prochain.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1F2A1F]"
          >
            Parlons-en <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
