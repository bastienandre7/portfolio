import Image from "next/image";

const projects = [
  {
    type: "Concept",
    title: "Braise",
    description:
      "Site vitrine haut de gamme pour un restaurant gastronomique : design éditorial asymétrique, menu dynamique, formulaire de réservation responsive et carte interactive personnalisée.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/braise-1.png",
    link: "https://braise-restaurant.netlify.app/",
  },
  {
    type: "Concept",
    title: "Altis",
    description:
      "Site vitrine moderne pour un artisan électricien local : accueil optimisé pour la conversion, domaines d'intervention, chantiers réalisés, réassurance client et formulaire de contact. Design responsive, animations fluides au scroll et architecture App Router complète.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/altis-1.png",
    link: "https://altis-electricite.vercel.app/",
  },
  {
    type: "Concept",
    title: "Prism",
    description:
      "Plateforme e-commerce de bout en bout : catalogue avec gestion des variantes et des stocks, panier persistant en temps réel, paiement sécurisé Stripe et tableau de bord administrateur avec analytics.",
    tags: [
      "Next.js 16",
      "PostgreSQL",
      "Stripe",
      "Zustand",
      "NextAuth.js",
      "TailwindCSS v4",
    ],
    image: "/projects/prism.png",
    link: "https://prism-fullstack-ecommerce-app.vercel.app/",
  },
  {
    type: "Concept",
    title: "Evines",
    description:
      "Application SaaS Full-Stack complète : authentification sécurisée multi-provider, tunnel de paiement Stripe avec gestion des abonnements, base PostgreSQL et e-mails transactionnels automatisés.",
    tags: ["Next.js", "React", "Stripe", "Prisma", "PostgreSQL", "Auth.js"],
    image: "/projects/evines-1.png",
    link: "https://evines-saas-platform-full-solution.vercel.app/",
  },
];

export default function Projects() {
  const isProjectCountEven = projects.length % 2 === 0;

  return (
    <section
      id="projets"
      className="bg-[#F6F1E7] text-[#1F2A1F] relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center space-y-4 mb-16 md:mb-24 max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5E6B52]">
            Projets
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight tracking-tight text-[#1F2A1F]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Quelques réalisations{" "}
            <span className="italic text-[#C97A3D] font-normal">récentes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projects.map(({ type, title, description, tags, image, link }) => (
            <article
              key={title}
              className="bg-white rounded-[24px] border border-[#E4DACB]/60 shadow-[0_15px_40px_rgba(31,42,31,0.03)] hover:shadow-[0_25px_50px_rgba(31,42,31,0.06)] overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-1 group h-full"
            >
              {/* Image cliquable */}
              <div className="aspect-[16/10] bg-[#EDE4D4] relative overflow-hidden">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover filter grayscale-[5%] group-hover:scale-[103%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </a>
                ) : (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover filter grayscale-[5%] group-hover:scale-[103%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                )}
              </div>

              {/* Contenu */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between border-t border-[#E4DACB]/60">
                <div className="flex-1">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5E6B52] mb-2.5 block">
                    {type}
                  </span>

                  {/* Titre classique et propre */}
                  <h3 className="text-2xl font-medium text-[#1F2A1F] mb-3 group-hover:text-[#5E6B52] transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm text-[#5B6152] leading-relaxed mb-6 font-light">
                    {description}
                  </p>
                </div>

                {/* Zone du bas réorganisée pour être ultra-claire */}
                <div className="pt-5 border-t border-[#E4DACB]/50 mt-auto flex flex-col gap-4">
                  {/* Les Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-[#EFF1E9] border border-[#5E6B52]/15 text-[#5E6B52] px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Le Bouton d'action explicite (uniquement si un lien existe) */}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full text-center bg-[#FAF7F0] hover:bg-[#5E6B52] text-[#1F2A1F] hover:text-white border border-[#E4DACB] hover:border-[#5E6B52] py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 group/btn mt-1"
                    >
                      Voir le site en direct
                      <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          <article
            className={`bg-white/40 rounded-[24px] border-2 border-dashed border-[#D8CDBB] p-8 md:p-12 transition-all duration-300 hover:bg-white hover:border-[#5E6B52]/40 hover:shadow-[0_15px_40px_rgba(31,42,31,0.03)] min-h-[350px] flex
              ${
                isProjectCountEven
                  ? "md:col-span-2 flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:min-h-[220px]"
                  : "flex-col items-center justify-center text-center"
              }`}
          >
            <div
              className={
                isProjectCountEven
                  ? "space-y-2"
                  : "flex-1 flex flex-col items-center justify-center"
              }
            >
              <h3
                className="text-2xl text-[#1F2A1F] mb-2 font-normal"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Votre projet{" "}
                <br
                  className={isProjectCountEven ? "hidden md:block" : "block"}
                />
                <span className="italic text-[#C97A3D]">pourrait être ici</span>
              </h3>
              <p
                className={`text-sm text-[#5B6152] font-light leading-relaxed ${isProjectCountEven ? "max-w-xl" : "max-w-[260px] mb-8"}`}
              >
                Parlons de vos objectifs pour concevoir une interface sur
                mesure.
              </p>
            </div>

            <div className={isProjectCountEven ? "shrink-0" : ""}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#1F2A1F] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#5E6B52] transition-all duration-300 shadow-sm"
              >
                Me contacter
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
