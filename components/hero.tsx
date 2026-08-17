"use client";

import ColorBends from "@/components/ColorBends";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaMapPin, FaPen } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#F6F1E7] text-[#1F2A1F]">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
        <ColorBends
          colors={["#EDE4D4", "#D8D0BE", "#C7D3C0"]}
          rotation={90}
          autoRotate={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.15}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent={true}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#5E6B52]/30 bg-[#5E6B52]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#5E6B52] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5E6B52] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5E6B52]"></span>
            </span>
            Disponible actuellement
          </div>

          <h1
            className="mb-4 text-[2.8rem] leading-[0.9] tracking-tight text-[#1F2A1F] sm:text-[4.2rem] md:text-[5.2rem]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Des sites inspirés
            <br />
            <span className="font-normal italic text-[#C97A3D]">
              de l’élégance
            </span>
            <br />
            d’Uzès et du Gard.
          </h1>

          <p className="mx-auto mb-7 max-w-2xl text-base font-light leading-relaxed text-[#1F2A1F]/70 sm:text-lg md:text-xl">
            Je crée des sites haut de gamme pour les maisons d’hôtes, domaines
            viticoles et entreprises locales d’Uzès et du Gard — élégants,
            rapides et pensés pour convertir les visiteurs en clients.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#C97A3D] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B3672E]"
            >
              Discutons de votre projet
            </a>

            <a
              href="#projets"
              className="group inline-flex items-center justify-center py-3 text-sm font-medium text-[#1F2A1F] transition-colors hover:text-[#5E6B52]"
            >
              Voir mes réalisations
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-[#1F2A1F]/15 pt-4 text-[13px] font-medium uppercase tracking-wide text-[#1F2A1F]/60">
            <span className="flex items-center gap-2">
              <BsFillLightningChargeFill className="text-[#C97A3D]" /> Réponse
              sous 24h
            </span>
            <span className="flex items-center gap-2">
              <FaPen className="text-[#C97A3D]" /> Devis gratuit
            </span>
            <span className="flex items-center gap-2">
              <FaMapPin className="text-[#C97A3D]" /> Basé à Uzès
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
