import {
  AppWindow,
  LayoutTemplate,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Site vitrine",
    description:
      "Un site qui présente votre activité clairement, rapide à charger et pensé pour convertir.",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site",
    description:
      "Moderniser un site existant : design, performance et SEO technique repris à zéro.",
  },
  {
    icon: AppWindow,
    title: "Application web",
    description:
      "Dashboards, espaces membres, formulaires avancés — sur-mesure selon votre besoin.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Boutique en ligne intégrée à vos paiements, pensée pour la conversion et la rapidité.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAFBF9] text-[#14171C] relative overflow-hidden py-24 md:py-32 border-t border-[#E4E6E0]/60"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#EAECE6] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#E3E8E1] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
              Ce que je fais
            </p>
            <h2
              className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#14171C]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Quel que soit votre projet, il part d&apos;un même principe :{" "}
              <span className="italic text-[#2F6B4F] font-normal block lg:inline">
                la simplicité.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 w-full">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-6 pb-8 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-[#E4E6E0]/50 hover:border-[#2F6B4F]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1EC] border border-[#2F6B4F]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#2F6B4F] group-hover:text-white">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#2F6B4F] group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="text-lg font-medium text-[#14171C] mb-3 tracking-wide">
                    {title}
                  </h3>

                  <p className="text-sm text-[#5B6168] leading-relaxed font-light">
                    {description}
                  </p>
                </div>

                <div className="mt-6 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#2F6B4F] text-sm">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
