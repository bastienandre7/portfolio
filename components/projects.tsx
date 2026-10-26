"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    type: "Application web · Concept",
    title: "Prism",
    description:
      "Une plateforme e-commerce complète avec catalogue, gestion des stocks, paiement Stripe et espace d'administration.",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "Stripe", icon: SiStripe },
      { label: "Node.js", icon: FaNodeJs },
    ],
    image: "/projects/prism.png",
    link: "https://prism-fullstack-ecommerce-app.vercel.app/",
    github: "https://github.com/bastienandre7/prism-ecommerce",
  },
  {
    type: "Site vitrine · Concept",
    title: "Braise",
    description:
      "Une identité élégante et éditoriale pour un restaurant gastronomique, pensée pour mettre en valeur sa cuisine et faciliter la réservation.",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind CSS", icon: SiTailwindcss },
    ],
    image: "/projects/braise-1.png",
    link: "https://braise-restaurant.netlify.app/",
    github: "https://github.com/bastienandre7/braise-restaurant",
  },
  {
    type: "Application web · Concept",
    title: "Evines",
    description:
      "Un starter SaaS fullstack conçu pour poser les bases d’une application moderne avec authentification, abonnements Stripe, gestion de données et dashboard.",
    tags: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Stripe", icon: SiStripe },
    ],
    image: "/projects/evines-1.png",
    link: "https://evines-saas-platform-full-solution.vercel.app/",
    github: "https://github.com/bastienandre7/evines-saas",
  },
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projets"
      aria-label="Projets sélectionnés"
      className="mx-auto max-w-[100rem] px-6 pb-12 sm:px-10 sm:pb-16 lg:px-12 lg:pb-20"
    >
      <div className="grid gap-0">
        {projects.map(
          ({ type, title, description, tags, image, link, github }, index) => (
            <section
              key={title}
              id={`projet-${title.toLowerCase()}`}
              aria-labelledby={`projet-${title.toLowerCase()}-heading`}
              className="flex flex-col gap-6 py-8 sm:py-10 lg:py-12"
            >
              <div className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.7,
                    delay: prefersReducedMotion ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`group grid w-full gap-8 lg:items-center lg:gap-12 ${
                    index === 1
                      ? "lg:grid-cols-[0.85fr_1.15fr]"
                      : "lg:grid-cols-[1.15fr_0.85fr]"
                  }`}
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le projet ${title}`}
                    className={`relative block aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-white/10 ${
                      index === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Aperçu du projet ${title}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />

                    <div className="absolute inset-0 bg-hero-accent/0 transition-colors duration-500 group-hover:bg-hero-accent/10" />

                    <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/20 opacity-0 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.6}
                        className="text-white"
                      />
                    </div>
                  </a>

                  <div className={index === 1 ? "lg:order-1" : ""}>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-hero-accent">
                        {type}
                      </span>

                      <span className="text-sm text-hero-subtitle/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div
                      aria-label="Technologies utilisées"
                      className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-medium uppercase tracking-[0.1em] text-hero-subtitle sm:text-sm"
                    >
                      {tags.map(({ label, icon: TagIcon }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5"
                        >
                          <TagIcon className="h-3 w-3" aria-hidden="true" />
                          {label}
                        </span>
                      ))}
                    </div>

                    <h3
                      id={`projet-${title.toLowerCase()}-heading`}
                      className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
                    >
                      {title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-hero-subtitle">
                      {description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-semibold text-hero-accent transition-opacity hover:opacity-75"
                      >
                        Voir le projet
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-semibold text-hero-subtitle transition-opacity hover:opacity-70"
                      >
                        <FaGithub className="h-5 w-5" aria-hidden="true" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              </div>
            </section>
          ),
        )}
      </div>
    </section>
  );
}
