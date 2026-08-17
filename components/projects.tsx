import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    type: "Site vitrine · Concept",
    title: "Braise",
    description:
      "Une identité élégante et éditoriale pour un restaurant gastronomique, pensée pour mettre en valeur sa cuisine et faciliter la réservation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/braise-1.png",
    link: "https://braise-restaurant.netlify.app/",
  },
  {
    type: "Site vitrine · Concept",
    title: "Altis",
    description:
      "Un site clair et rassurant pour un artisan électricien local, conçu pour présenter ses services et transformer les visites en demandes de contact.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/altis-1.png",
    link: "https://altis-electricite.vercel.app/",
  },
  {
    type: "Application web · Concept",
    title: "Prism",
    description:
      "Une plateforme e-commerce complète avec catalogue, gestion des stocks, paiement Stripe et espace d'administration.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/projects/prism.png",
    link: "https://prism-fullstack-ecommerce-app.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-28 bg-[#FAF7F0]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5E6B52]">
            Réalisations
          </span>

          <h2
            id="projects-heading"
            className="mt-4 text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#1F2A1F]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
            }}
          >
            Des projets conçus pour{" "}
            <span className="italic text-[#C97A3D]">
              être vus, compris et utilisés.
            </span>
          </h2>

          <p className="mt-5 text-sm md:text-base text-[#5B6152] leading-relaxed font-light max-w-xl">
            Quelques projets qui illustrent ma façon de concevoir des interfaces
            modernes, performantes et adaptées à chaque activité.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map(
            ({ type, title, description, tags, image, link }, index) => (
              <article
                key={title}
                className={`group bg-white rounded-[24px] border border-[#E4DACB]/70 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(31,42,31,0.07)] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le projet ${title}`}
                  className={`block relative overflow-hidden bg-[#EDE4D4] ${
                    index === 0 ? "aspect-[16/7]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Aperçu du projet ${title}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 1200px"
                        : "(max-width: 768px) 100vw, 600px"
                    }
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#1F2A1F]/0 group-hover:bg-[#1F2A1F]/5 transition-colors duration-500" />

                  {/* View button */}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#1F2A1F]"
                    />
                  </div>
                </a>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5E6B52]">
                      {type}
                    </span>

                    <span className="text-xs text-[#9A9488]">0{index + 1}</span>
                  </div>

                  <h3
                    className="text-2xl md:text-[28px] text-[#1F2A1F] leading-tight"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 500,
                    }}
                  >
                    {title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5B6152] leading-relaxed font-light max-w-2xl">
                    {description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E4DACB]/60">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium text-[#5E6B52] bg-[#EFF1E9] border border-[#5E6B52]/10 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F2A1F] hover:text-[#C97A3D] transition-colors"
                    >
                      Voir le projet
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-[24px] border border-dashed border-[#D8CDBB] bg-white/40 px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl md:text-2xl text-[#1F2A1F]"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
              }}
            >
              Votre projet pourrait être le prochain.
            </h3>

            <p className="mt-2 text-sm text-[#5B6152] font-light">
              Parlons de votre activité et de ce que votre site pourrait
              devenir.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#1F2A1F] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#5E6B52] transition-colors duration-300"
          >
            Parlons de votre projet
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
