"use client";

import Particles from "@/components/Particles";
import Image from "next/image";
import { useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaMapPin, FaPen } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projets" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#technologies" },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#F4F5F1] text-[#14171C] min-h-screen relative overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#2F6B4F", "#7A828A"]}
          particleCount={200}
          particleSpread={4}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <header className="relative z-50 w-full border-b border-[#E4E6E0]/60 bg-[#F4F5F1]/60 backdrop-blur-md">
        <div className="mx-auto max-w-6xl h-24 px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-xl md:text-2xl text-[#14171C] font-normal"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Bastien Andre
          </a>

          <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-wider font-medium text-[#5B6168]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#2F6B4F] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#2F6B4F] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#14171C] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2F6B4F] transition-all duration-300 shadow-sm"
          >
            Me contacter
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#14171C] hover:text-[#2F6B4F] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>

        <div
          className={`absolute top-24 left-0 w-full bg-[#F4F5F1]/95 backdrop-blur-lg border-b border-[#E4E6E0]/60 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
            isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 text-[14px] uppercase tracking-wider font-medium text-[#5B6168]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#2F6B4F] transition-colors py-1 w-full text-center"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#14171C] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2F6B4F] transition-all duration-300 shadow-sm w-[80%] max-w-xs"
            >
              Me contacter
            </a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-20 md:py-32 grid md:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-8 items-center my-auto">
        <div className="space-y-8 md:space-y-10">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2F6B4F]/20 bg-[#2F6B4F]/5 px-4 py-2 text-xs font-medium text-[#2F6B4F] tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F6B4F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F6B4F]"></span>
            </span>
            Disponible actuellement
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-[80px] leading-[1] md:leading-[0.95] tracking-tight text-[#14171C]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Des sites rapides
            <br />
            <span className="italic text-[#2F6B4F] font-normal">
              qui font grandir
            </span>
            <br />
            votre activité.
          </h1>

          <p className="text-lg md:text-xl text-[#5B6168] max-w-lg leading-relaxed font-light">
            Création de sites vitrines d&apos;exception, refontes et
            applications web modernes sur-mesure avec React, Next.js et
            TypeScript.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#2F6B4F] px-8 py-4 text-sm font-medium text-white hover:bg-[#14171C] transition-all duration-300 shadow-lg shadow-[#2F6B4F]/10 transform hover:-translate-y-0.5"
            >
              Discutons de votre projet
            </a>

            <a
              href="#projets"
              className="group inline-flex items-center justify-center text-sm font-medium text-[#14171C] hover:text-[#2F6B4F] transition-colors py-3"
            >
              Voir mes réalisations
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#E4E6E0]/80 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-[#7A828A] tracking-wide uppercase font-medium">
            <span className="flex items-center gap-2">
              <BsFillLightningChargeFill /> Réponse sous 24h
            </span>
            <span className="flex items-center gap-2">
              <FaPen /> Devis gratuit
            </span>
            <span className="flex items-center gap-2">
              <FaMapPin /> Basé à Uzès
            </span>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end w-full max-w-[400px]">
          <div className="bg-white p-4 pb-8 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#E4E6E0]/40 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
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
                href="https://github.com/..."
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
                href="https://linkedin.com/in/..."
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
                href="https://www.malt.fr/profile/..."
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
    </section>
  );
}
