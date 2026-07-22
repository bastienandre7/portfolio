"use client";

import ColorBends from "@/components/ColorBends";
import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaMapPin, FaPen } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#F6F1E7] text-[#1F2A1F] min-h-screen relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
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

      {/* Bloc de contenu : grandit librement selon son propre contenu */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-8 items-center">
          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            {/* Badge Disponibilité */}
            <div className="inline-flex items-center justify-center md:justify-start gap-2.5 rounded-full border border-[#5E6B52]/30 bg-[#5E6B52]/10 px-4 py-2 text-xs font-medium text-[#5E6B52] tracking-wide backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5E6B52] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5E6B52]"></span>
              </span>
              Disponible actuellement
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-[80px] leading-[1] md:leading-[0.95] tracking-tight text-[#1F2A1F]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Des sites inspirés
              <br />
              <span className="italic text-[#C97A3D] font-normal">
                de l’élégance
              </span>
              <br />
              d’Uzès et du Gard.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#1F2A1F]/70 max-w-lg leading-relaxed font-light mx-auto md:mx-0">
              Je crée des sites haut de gamme pour les maisons d’hôtes, domaines
              viticoles et entreprises locales d’Uzès et du Gard — élégants,
              rapides et pensés pour convertir les visiteurs en clients.
            </p>

            {/* Actions CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#C97A3D] px-8 py-4 text-sm font-medium text-white hover:bg-[#B3672E] transition-all duration-300 shadow-lg shadow-black/10 transform hover:-translate-y-0.5"
              >
                Discutons de votre projet
              </a>

              <a
                href="#projets"
                className="group inline-flex items-center justify-center text-sm font-medium text-[#1F2A1F] hover:text-[#5E6B52] transition-colors py-3"
              >
                Voir mes réalisations
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Reassurance Badges */}
            <div className="pt-4 border-t border-[#1F2A1F]/15 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-[13px] text-[#1F2A1F]/60 tracking-wide uppercase font-medium">
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

          {/* Polaroid Card */}
          <div className="justify-self-center md:justify-self-end w-full max-w-[400px]">
            <div className="bg-[#F5F6F2] p-4 pb-8 rounded-[24px] shadow-[0_30px_70px_rgba(31,42,31,0.18)] border border-[#1F2A1F]/5 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out text-[#1C2318]">
              <div className="aspect-[4/5] rounded-[16px] overflow-hidden bg-[#EAECE6] relative group">
                <Image
                  src="/images/photo-profil.png"
                  alt="Bastien Andre"
                  fill
                  priority
                  className="object-cover filter grayscale-[10%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-4 px-1 flex justify-between items-center mb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#7A828A] font-mono">
                  Portfolio &apos;26
                </span>
                <span className="text-[11px] text-[#5E6B52] font-serif italic font-medium">
                  Bastien A.
                </span>
              </div>

              {/* Reseaux sociaux */}
              <div className="flex items-center gap-3 justify-center">
                <a
                  href="mailto:contact@bastienandredev.fr"
                  aria-label="Envoyer un email"
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/80 shadow-sm flex items-center justify-center text-[#4A5248] hover:border-[#5E6B52] hover:text-[#5E6B52] hover:bg-[#EFF1EA]/60 transition-all duration-300 group"
                >
                  <CiMail
                    size={20}
                    className="transform group-hover:scale-105 transition-transform"
                  />
                </a>

                <a
                  href="https://github.com/bastienandre7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visiter le profil GitHub"
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/80 shadow-sm flex items-center justify-center text-[#4A5248] hover:border-[#5E6B52] hover:text-[#5E6B52] hover:bg-[#EFF1EA]/60 transition-all duration-300 group"
                >
                  <FaGithub
                    size={18}
                    className="transform group-hover:scale-105 transition-transform"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/bastienandre-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visiter le profil LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/80 shadow-sm flex items-center justify-center text-[#4A5248] hover:border-[#5E6B52] hover:text-[#5E6B52] hover:bg-[#EFF1EA]/60 transition-all duration-300 group"
                >
                  <FaLinkedin
                    size={18}
                    className="transform group-hover:scale-105 transition-transform"
                  />
                </a>

                <a
                  href="https://www.malt.fr/profile/bastienandre-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visiter le profil Malt"
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/80 shadow-sm flex items-center justify-center text-[#4A5248] hover:border-[#5E6B52] hover:text-[#5E6B52] hover:bg-[#EFF1EA]/60 transition-all duration-300 group"
                >
                  <Image
                    src="/logo-malt.jpg"
                    alt="Logo Malt"
                    width={18}
                    height={18}
                    className="transform group-hover:scale-105 transition-transform grayscale group-hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fondu de transition bas de page */}
      <div
        className="relative z-[2] h-40 md:h-56 w-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(246,241,231,0.5) 40%, #FAF7F0 100%)",
        }}
      />
    </section>
  );
}
