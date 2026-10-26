"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

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

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="mx-auto max-w-[100rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
    >
      <div>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
            className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl bg-secondary sm:aspect-[4/3] lg:order-1 lg:aspect-auto lg:min-h-[480px]"
          >
            <Image
              src="/images/photo-profil-bastien-andre.png"
              alt="Portrait de Bastien Andre"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/50 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-md">
              Développeur freelance · Uzès
            </span>
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
            className="order-1 flex flex-col lg:order-2"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-hero-accent">
              À propos de moi
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              L’humain derrière{" "}
              <span className="text-hero-accent">le code.</span>
            </h2>
            <div className="mt-6 max-w-2xl space-y-4">
              <p className="text-lg leading-8 text-hero-subtitle sm:text-xl">
                Je m’appelle Bastien, développeur web freelance, et j’ai
                construit mon parcours autour d’une envie simple : créer des
                expériences numériques utiles et bien pensées.
              </p>
              <p className="text-base leading-7 text-hero-subtitle sm:text-lg">
                Ce qui me motive, c’est de transformer une idée parfois complexe
                en une solution claire, élégante et accessible.
              </p>
              <p className="text-base leading-7 text-hero-subtitle sm:text-lg">
                J’aborde chaque projet avec curiosité, méthode et attention aux
                détails, du premier échange jusqu’aux dernières lignes de code.
              </p>
              <p className="text-base leading-7 text-hero-subtitle sm:text-lg">
                Mon objectif : livrer un site rapide, maintenable et fidèle à
                l’identité de chaque entreprise.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="mt-12 rounded-3xl bg-hero-accent/[0.06] p-6 shadow-sm sm:p-8 lg:mt-16 lg:p-10"
        >
          <div className="mb-8">
            <div className="mb-5 h-1 w-12 rounded-full bg-hero-accent" />
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-hero-accent sm:text-lg">
              Parcours
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resumeParcours.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className="group flex flex-col rounded-2xl bg-white/50 p-5 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-white/80 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold uppercase tracking-wider text-hero-accent sm:text-base">
                    {item.date}
                  </span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-hero-accent/10 text-hero-accent transition-colors group-hover:bg-hero-accent/20">
                    {item.isExp ? (
                      <Briefcase className="h-4 w-4" />
                    ) : (
                      <GraduationCap className="h-4 w-4" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-hero-accent sm:text-base">
                  {item.place}
                </p>
                <p className="mt-4 text-base leading-7 text-hero-subtitle">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
