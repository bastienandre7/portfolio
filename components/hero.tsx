"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const subscribeToPreloader = (onStoreChange: () => void) => {
  window.addEventListener("preloader-reveal", onStoreChange);
  return () => window.removeEventListener("preloader-reveal", onStoreChange);
};

const getPreloaderState = () =>
  document.body.dataset.preloaderComplete === "true";

const getServerPreloaderState = () => false;

export default function Hero() {
  const isRevealed = useSyncExternalStore(
    subscribeToPreloader,
    getPreloaderState,
    getServerPreloaderState,
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:pb-12 lg:pt-32">
        <motion.div
          initial="hidden"
          animate={isRevealed ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className="max-w-xl"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#5E6B52]"
          >
            Développeur web freelance · Uzès
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mb-7 max-w-lg text-5xl font-medium leading-[1.04] tracking-[-0.04em] text-[#1F2A1F] sm:text-6xl lg:text-[4.7rem]"
          >
            Des sites qui donnent envie de{" "}
            <span className="text-[#C97A3D]">rester.</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-9 max-w-lg text-base leading-7 text-[#1F2A1F]/65 sm:text-lg"
          >
            Développeur Next.js & React. Je transforme vos idées et maquettes
            Figma en applications web ultra-rapides, modernes et performantes.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1F2A1F]"
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={
            isRevealed
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.96, y: 20 }
          }
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-[#C97A3D]/15" />
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2rem] border-l-2 border-t-2 border-[#C97A3D]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E8DDC8] sm:aspect-[5/6]">
              <Image
                src="/images/photo-profil.png"
                alt="Bastien Andre, développeur web freelance à Uzès"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
