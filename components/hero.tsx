"use client";

import Silk from "@/components/Silk";
import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaMapPin, FaPen } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#0B1410] text-[#F4F5F1] min-h-screen relative overflow-hidden flex flex-col">
      {/* Fond Silk animé */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Silk
          speed={8.2}
          scale={2.2}
          color="#2F6B4F"
          noiseIntensity={1.2}
          rotation={2.26}
        />
      </div>

      {/* Voile de contraste global pour garder le texte lisible */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1410]/50 via-[#0B1410]/25 to-[#0B1410]/75 pointer-events-none" />

      {/* Voile directionnel supplémentaire côté texte (gauche), plus fort en bas où se trouvent le paragraphe et les badges */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B1410]/60 via-[#0B1410]/20 to-transparent pointer-events-none" />

      {/* Bloc de contenu : grandit librement selon son propre contenu, jamais tronqué, quelle que soit la taille d'écran */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-8 items-center">
          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2.5 rounded-full border border-[#9FCBAE]/30 bg-[#9FCBAE]/10 px-4 py-2 text-xs font-medium text-[#9FCBAE] tracking-wide backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9FCBAE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9FCBAE]"></span>
              </span>
              Disponible actuellement
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-[80px] leading-[1] md:leading-[0.95] tracking-tight text-[#F4F5F1]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Des sites rapides
              <br />
              <span className="italic text-[#9FCBAE] font-normal">
                qui font grandir
              </span>
              <br />
              votre activité.
            </h1>

            <p className="text-lg md:text-xl text-[#E4E7E2] max-w-lg leading-relaxed font-light mx-auto md:mx-0 [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]">
              Création de sites vitrines d&apos;exception, refontes et
              applications web modernes sur-mesure avec React, Next.js et
              TypeScript.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#9FCBAE] px-8 py-4 text-sm font-medium text-[#0B1410] hover:bg-[#F4F5F1] transition-all duration-300 shadow-lg shadow-black/20 transform hover:-translate-y-0.5"
              >
                Discutons de votre projet
              </a>

              <a
                href="#projets"
                className="group inline-flex items-center justify-center text-sm font-medium text-[#F4F5F1] hover:text-[#9FCBAE] transition-colors py-3"
              >
                Voir mes réalisations
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-[13px] text-[#C9CFC9] tracking-wide uppercase font-medium">
              <span className="flex items-center gap-2">
                <BsFillLightningChargeFill className="text-[#9FCBAE]" /> Réponse
                sous 24h
              </span>
              <span className="flex items-center gap-2">
                <FaPen className="text-[#9FCBAE]" /> Devis gratuit
              </span>
              <span className="flex items-center gap-2">
                <FaMapPin className="text-[#9FCBAE]" /> Basé à Uzès
              </span>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end w-full max-w-[400px]">
            <div className="bg-[#F4F5F1] p-4 pb-8 rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,0.45)] border border-white/10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
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
                <span className="text-[11px] text-[#2F6B4F] font-serif italic">
                  Bastien A.
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <a
                  href="mailto:contact@bastienandredev.fr"
                  aria-label="Envoyer un email"
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
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
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
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
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
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
                  className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
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

      {/* Fondu de sortie vers Services, placé dans le flux juste après le contenu réel : jamais de chevauchement, quelle que soit la hauteur du hero */}
      <div
        className="relative z-[2] h-40 md:h-56 w-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(250,251,249,0.08) 30%, rgba(250,251,249,0.28) 55%, rgba(250,251,249,0.6) 78%, #FAFBF9 100%)",
        }}
      />
    </section>
  );
}
