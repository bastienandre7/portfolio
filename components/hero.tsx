"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiMalt } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-[60vh] max-w-[100rem] items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className="w-full text-left"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-[clamp(2.1rem,5.8vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
          >
            <span className="text-hero-accent">Bonjour !</span> Moi, c’est{" "}
            <span className="text-hero-accent">Bastien</span>. Je développe des
            applications web avec Next.js pour rendre internet plus rapide,
            fluide et agréable à utiliser.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-6 max-w-4xl text-lg leading-7 text-hero-subtitle sm:mt-8 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9"
          >
            Basé à Uzès, dans le Gard, j’accompagne des clients partout en
            France.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-7 flex flex-col items-stretch gap-5 sm:mt-8 sm:flex-row sm:items-center sm:gap-6"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-hero-accent px-6 py-4 text-base font-medium text-white transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:px-7"
            >
              Me parler de votre projet
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            <nav className="w-full sm:w-auto" aria-label="Réseaux sociaux">
              <ul className="flex items-center justify-center gap-3 sm:justify-start">
                <li>
                  <a
                    href="https://www.malt.fr/profile/bastienandre-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Malt (nouvel onglet)"
                    className="flex h-12 w-25 items-center justify-center rounded-full border border-foreground/15 text-hero-subtitle transition-colors hover:border-hero-accent/40 hover:text-hero-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent"
                  >
                    <SiMalt size={60} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bastienandre-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn (nouvel onglet)"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-hero-subtitle transition-colors hover:border-hero-accent/40 hover:text-hero-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent"
                  >
                    <FaLinkedinIn size={19} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/bastienandre7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub (nouvel onglet)"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 text-hero-subtitle transition-colors hover:border-hero-accent/40 hover:text-hero-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent"
                  >
                    <FaGithub size={19} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
