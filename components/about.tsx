export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F4F5F1] text-[#14171C] relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-5%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#EAECE6] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#E3E8E1] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
        <div className="space-y-4 mb-16 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
            À propos
          </p>
          <h2
            className="text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl text-[#14171C]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Un développeur qui privilégie{" "}
            <span className="italic text-[#2F6B4F] font-normal">
              la qualité avant la quantité.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-[#E4E6E0]/50 space-y-6 text-base text-[#5B6168] leading-relaxed font-light">
            <p className="text-lg md:text-xl text-[#14171C] font-normal leading-snug mb-8">
              Je m&apos;appelle{" "}
              <span className="font-semibold text-[#2F6B4F] font-serif italic">
                Bastien
              </span>
              , développeur web freelance spécialisé dans l&apos;intégration
              d&apos;interfaces haut de gamme avec{" "}
              <strong className="font-medium text-[#14171C]">
                React, Next.js et TypeScript
              </strong>
              .
            </p>

            <p>
              J&apos;aide les entreprises à créer des sites web modernes,
              performants et faciles à maintenir. Mon objectif est simple :
              développer des interfaces rapides, claires et pensées pour durer.
            </p>

            <p>
              Mon parcours m&apos;a amené à concevoir des architectures solides,
              notamment à travers la création de starter kits et de templates
              Next.js complets. Cette expérience m&apos;a donné une forte
              exigence sur la structure du code, les performances techniques et
              la maintenabilité des projets que je livre.
            </p>

            <p>
              Aujourd&apos;hui, j&apos;allie mon expertise technique aux outils
              de développement modernes et à l&apos;intelligence artificielle
              pour concevoir des solutions performantes, optimisées et
              parfaitement adaptées à vos besoins.
            </p>
          </div>

          <div className="grid gap-2 w-full">
            <div className="bg-white p-6 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-[#E4E6E0]/50 hover:border-[#2F6B4F]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 group">
              <div
                className="text-3xl font-medium text-[#2F6B4F] mb-2 font-serif italic"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Focus
              </div>
              <p className="text-sm text-[#5B6168] leading-relaxed font-light">
                Spécialisé à 100% sur l&apos;écosystème Next.js pour concevoir
                des architectures web modernes, fluides et robustes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-[#E4E6E0]/50 hover:border-[#2F6B4F]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 group">
              <div
                className="text-3xl font-medium text-[#14171C] mb-2 font-serif italic"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Propre
              </div>
              <p className="text-sm text-[#5B6168] leading-relaxed font-light">
                Un code source moderne et optimisé, sans les lourdeurs des
                constructeurs de pages automatisés traditionnels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-[#E4E6E0]/50 hover:border-[#2F6B4F]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 group">
              <div
                className="text-3xl font-medium text-[#14171C] mb-2 font-serif italic"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                SEO
              </div>
              <p className="text-sm text-[#5B6168] leading-relaxed font-light">
                Une attention rigoureuse portée à l&apos;accessibilité, au SEO
                technique et à l&apos;optimisation du temps de chargement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
