import Image from "next/image";

const projects = [
  {
    type: "Projet personnel",
    title: "BloomTPL",
    description:
      "Bibliothèque de starter kits Next.js destinée aux développeurs et entrepreneurs : authentification, paiements et base de données préconfigurés.",
    tags: ["Next.js", "Prisma", "Stripe", "NextAuth"],
    image: "/projects/prism.png",
  },
  {
    type: "Projet personnel",
    title: "Orbit",
    description:
      "Template Next.js premium pour agences digitales, conçu pour la vente : design system, animations et performance soignés.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    image: "/projects/orbit.png",
  },
];

export default function Projects() {
  const isProjectCountEven = projects.length % 2 === 0;

  return (
    <section
      id="projets"
      className="bg-[#FAFBF9] text-[#14171C] relative overflow-hidden py-24 md:py-32 border-t border-[#E4E6E0]/60"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center space-y-4 mb-16 md:mb-24 max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
            Projets
          </p>
          <h2
            className="text-4xl md:text-5xl leading-tight tracking-tight text-[#14171C]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Quelques réalisations{" "}
            <span className="italic text-[#2F6B4F] font-normal">récentes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projects.map(({ type, title, description, tags, image }) => (
            <article
              key={title}
              className="bg-white rounded-[24px] border border-[#E4E6E0]/50 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-1 group h-full"
            >
              <div className="aspect-[16/10] bg-[#EAECE6] relative overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover filter grayscale-[5%] group-hover:scale-[103%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#2F6B4F] mb-2.5 block">
                    {type}
                  </span>
                  <h3 className="text-2xl font-medium text-[#14171C] mb-3 group-hover:text-[#2F6B4F] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5B6168] leading-relaxed mb-6 font-light">
                    {description}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap pt-5 border-t border-[#E4E6E0]/40">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-[#EAF1EC]/80 border border-[#2F6B4F]/10 text-[#2F6B4F] px-3 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article
            className={`bg-white/40 rounded-[24px] border-2 border-dashed border-[#C7CBC2] p-8 md:p-12 transition-all duration-300 hover:bg-white hover:border-[#2F6B4F]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.02)] min-h-[350px] flex
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
                className="text-2xl text-[#14171C] mb-2 font-normal"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Votre projet{" "}
                <br
                  className={isProjectCountEven ? "hidden md:block" : "block"}
                />
                <span className="italic text-[#2F6B4F]">pourrait être ici</span>
              </h3>
              <p
                className={`text-sm text-[#5B6168] font-light leading-relaxed ${isProjectCountEven ? "max-w-xl" : "max-w-[260px] mb-8"}`}
              >
                Parlons de vos objectifs pour concevoir une interface sur
                mesure.
              </p>
            </div>

            <div className={isProjectCountEven ? "shrink-0" : ""}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#14171C] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#2F6B4F] transition-all duration-300 shadow-sm"
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
