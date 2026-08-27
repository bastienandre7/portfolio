"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const resumeParcours = [
    {
      date: "2026 - Aujourd’hui",
      title: "Développeur Web Next.js",
      place: "Freelance · Uzès, France",
      description:
        "Création d’applications web fullstack modernes avec Next.js, React, TypeScript, Prisma et Tailwind CSS.",
      isExp: true,
    },
    {
      date: "2025",
      title: "Créateur & Développeur Fullstack",
      place: "BloomTPL · Uzès, France",
      description:
        "Conception d’une bibliothèque de starter kits Next.js avec authentification, base de données et abonnements.",
      isExp: true,
    },
    {
      date: "2024",
      title: "Cursus Développeur Back-End .NET",
      place: "OpenClassrooms",
      description:
        "Architecture logicielle, bases de données et programmation orientée objet, avant une spécialisation Next.js.",
      isExp: false,
    },
    {
      date: "2023",
      title: "Développeur intégrateur web",
      place: "OpenClassrooms · Niveau 5 / RNCP",
      description:
        "Formation validée par plusieurs projets, centrée sur React, l’intégration pixel-perfect, le SEO et la performance web.",
      isExp: false,
    },
  ];

  return (
    <section id="about" className="bg-white py-24 text-[#1F2A1F] md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#5E6B52]">
              À propos de moi
            </p>
            <h2 className="max-w-md text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2A1F] sm:text-5xl">
              L’humain derrière <span className="text-[#C97A3D]">le code.</span>
            </h2>
            <div className="mt-8 max-w-2xl">
              <p className="text-lg leading-8 text-[#1F2A1F]/75 sm:text-xl">
                Je m’appelle Bastien, développeur web freelance, et j’ai
                construit mon parcours autour d’une envie simple : créer des
                expériences numériques utiles et bien pensées.
              </p>
              <p className="mt-5 text-base leading-7 text-[#1F2A1F]/75 sm:text-lg">
                Ce qui me motive, c’est de transformer une idée parfois complexe
                en une solution claire, élégante et accessible.
              </p>
              <p className="mt-5 text-base leading-7 text-[#1F2A1F]/75 sm:text-lg">
                J’aborde chaque projet avec curiosité, méthode et attention aux
                détails, du premier échange jusqu’aux dernières lignes de code.
              </p>
              <p className="mt-5 text-base leading-7 text-[#1F2A1F]/75 sm:text-lg">
                Mon objectif : livrer un site rapide, maintenable et fidèle à
                l’identité de chaque entreprise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : 0.12,
              ease: "easeOut",
            }}
            className="border-t border-[#1F2A1F]/10 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5E6B52] sm:text-xs sm:tracking-[0.25em]">
              Parcours
            </p>
            <div className="relative ml-1 space-y-7 border-l border-[#1F2A1F]/15 pl-5 sm:ml-2 sm:pl-6">
              {resumeParcours.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="flex items-start gap-3">
                    <div className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#E4DACB] bg-white text-[#1F2A1F]/70 transition-all duration-300 group-hover:border-[#5E6B52] group-hover:bg-[#5E6B52] group-hover:text-white sm:-left-[37px] sm:h-7 sm:w-7">
                      {item.isExp ? (
                        <Briefcase className="h-3.5 w-3.5" />
                      ) : (
                        <GraduationCap className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C97A3D]">
                        {item.date}
                      </span>
                      <h3 className="mt-1 text-sm font-medium text-[#1F2A1F] sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-[#1F2A1F]/50">
                        {item.place}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#1F2A1F]/60">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
