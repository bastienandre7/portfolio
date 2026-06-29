// Process.jsx

const steps = [
  {
    title: "Échange initial",
    description:
      "On discute de votre besoin, votre budget et vos délais. Gratuit, sans engagement.",
  },
  {
    title: "Proposition claire",
    description:
      "Devis détaillé, périmètre et délai fixés avant de démarrer — pas de surprise en cours de route.",
  },
  {
    title: "Développement",
    description:
      "J'avance par étapes, avec des points réguliers pour que vous suiviez l'avancée du projet.",
  },
  {
    title: "Livraison & suivi",
    description:
      "Mise en ligne, formation si besoin, et disponibilité après livraison pour les ajustements.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#F4F5F1] text-[#14171C] relative overflow-hidden py-24 md:py-32 border-t border-[#E4E6E0]/60"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#E3E8E1] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#EAECE6] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="space-y-4 mb-16 md:mb-24">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
            Comment je travaille
          </p>
          <h2
            className="text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl text-[#14171C]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Un déroulé simple, du premier message{" "}
            <span className="italic text-[#2F6B4F] font-normal">
              à la mise en ligne.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-8 relative">
          {steps.map(({ title, description }, i) => (
            <div
              key={title}
              className="relative pt-6 border-t border-[#C7CBC2]/80 group transition-all duration-300"
            >
              <div
                className="text-xs font-semibold tracking-wider text-[#2F6B4F] mb-4 flex items-center gap-1.5"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  /
                </span>
              </div>

              <h3 className="text-lg font-medium text-[#14171C] mb-3 group-hover:text-[#2F6B4F] transition-colors duration-300">
                {title}
              </h3>

              <p className="text-sm text-[#5B6168] leading-relaxed font-light">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
