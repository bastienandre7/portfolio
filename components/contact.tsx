"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FaCheck,
  FaEnvelope,
  FaExclamation,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa6";
import { SiMalt } from "react-icons/si";

const socialLinks: { name: string; href: string; icon?: IconType }[] = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/bastienandre-dev/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/bastienandre7",
  },
  {
    name: "Malt",
    href: "https://www.malt.fr/profile/bastienandre-dev",
  },
];

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("bastienandredev@gmail.com");
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Votre message a bien été envoyé ! Je vous réponds sous 24 à 48h.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          type: "error",
          message:
            "Une erreur est survenue. N'hésitez pas à m'écrire directement par email.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez vérifier votre réseau.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-[calc(100dvh-var(--navbar-height,5rem))] items-center bg-[#050505] py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[100rem] px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-5">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Parlons de votre prochain{" "}
                <span className="text-[#8195ff]">projet.</span>
              </h2>

              <p className="max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Une idée, une refonte ou simplement une première question ?
                Écrivez-moi, le premier échange est sans engagement.
              </p>
            </div>

            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex w-full items-center gap-4 py-4 text-left transition-colors"
              >
                <FaEnvelope className="h-4 w-4 shrink-0 text-[#8195ff]" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    Email direct
                  </span>
                  <span className="block break-all text-base font-medium text-white transition-colors group-hover:text-[#8195ff] sm:text-lg">
                    {isCopied ? "Adresse copiée" : "bastienandredev@gmail.com"}
                  </span>
                </span>
              </button>

              <div className="flex items-center gap-4 py-4">
                <FaLocationDot className="h-4 w-4 shrink-0 text-[#8195ff]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    Localisation
                  </p>
                  <p className="text-base font-medium text-white sm:text-lg">
                    Uzès & Nîmes, Gard (à distance)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name === "Malt" ? "Malt" : undefined}
                    className="inline-flex items-center gap-2 text-base font-medium text-white/70 transition-colors hover:text-[#8195ff] sm:text-lg"
                  >
                    {name === "Malt" ? (
                      <SiMalt className="h-16 w-16" />
                    ) : Icon ? (
                      <Icon className="h-4 w-4" />
                    ) : null}
                    {name !== "Malt" && <span>{name}</span>}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
            className="flex flex-col lg:border-l lg:border-white/10 lg:pl-12"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-full flex-col">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Écrivez-moi
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Remplissez ce formulaire et je vous répondrai dans les plus
                  brefs délais.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-1 flex-col space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium uppercase tracking-[0.12em] text-white/70"
                      >
                        Votre nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Alexandre Rossi"
                        className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm font-medium text-white placeholder-white/35 transition-colors focus:border-hero-accent focus:outline-none focus:ring-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-medium uppercase tracking-[0.12em] text-white/70"
                      >
                        Votre email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="alex@exemple.com"
                        className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm font-medium text-white placeholder-white/35 transition-colors focus:border-hero-accent focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-medium uppercase tracking-[0.12em] text-white/70"
                    >
                      Sujet de votre demande
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Création de site, refonte, accompagnement..."
                      className="w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm font-medium text-white placeholder-white/35 transition-colors focus:border-hero-accent focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div className="flex flex-1 flex-col space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium uppercase tracking-[0.12em] text-white/70"
                    >
                      Détails du projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Parlez-moi de vos objectifs, vos contraintes et vos délais..."
                      className="min-h-[160px] w-full flex-1 resize-y rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm font-medium text-white placeholder-white/35 transition-colors focus:border-hero-accent focus:outline-none focus:ring-0"
                    />
                  </div>

                  {status.type && (
                    <div
                      className={`flex items-start gap-3 rounded-xl border p-4 text-sm font-medium ${
                        status.type === "success"
                          ? "border-hero-accent/50 bg-hero-accent/10 text-white"
                          : "border-red-200/30 bg-red-950/30 text-red-100 backdrop-blur-md"
                      }`}
                    >
                      {status.type === "success" ? (
                        <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#8195ff]" />
                      ) : (
                        <FaExclamation className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      )}
                      <span>{status.message}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-hero-accent px-8 py-4 text-sm font-semibold text-white transition-[filter] hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="h-3.5 w-3.5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <FaPaperPlane className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm font-medium tracking-wide text-white/60 sm:mt-16 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Bastien Andre. Tous droits
            réservés.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/mentions-legales"
              className="transition-colors duration-200 hover:text-[#b9d0ff]"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="transition-colors duration-200 hover:text-[#b9d0ff]"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
