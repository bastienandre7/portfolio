"use client";

import Image from "next/image";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
      className="relative overflow-hidden bg-[#F2EDE4] py-16 text-[#1F2A1F] md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* COLONNE GAUCHE (5 cols) */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E4DACB] bg-[#F4EFE6]/60 p-8 shadow-xs lg:col-span-5 lg:p-10">
            <div className="space-y-6">
              {/* Badge de disponibilité */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#5E6B52]/30 bg-[#EFF1E9] px-4 py-1.5 text-xs font-semibold text-[#3C4733]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C97A3D] opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C97A3D]"></span>
                </span>
                Disponible pour de nouveaux projets
              </div>

              {/* Titre */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#5E6B52]">
                  Contact
                </p>
                <h2 className="mt-2 font-serif text-3xl font-normal leading-tight tracking-tight text-[#1F2A1F] md:text-4xl lg:text-5xl">
                  Créons quelque chose d’
                  <span className="italic text-[#C97A3D]">unique.</span>
                </h2>
              </div>

              <p className="text-sm font-normal leading-relaxed text-[#4A5043] md:text-base">
                Vous avez un projet en tête, une question ou simplement envie
                d’échanger sur une future collaboration ? Écrivez-moi, le
                premier échange est sans engagement.
              </p>
            </div>

            {/* Cartes de contact direct */}
            <div className="my-8 space-y-3">
              <a
                href="mailto:contact@bastienandredev.fr"
                className="group flex items-center gap-4 rounded-2xl border border-[#E4DACB] bg-white p-4 shadow-xs transition-all hover:border-[#5E6B52] hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#5E6B52]/20 bg-[#EFF1E9] text-[#3C4733] transition-colors group-hover:bg-[#5E6B52] group-hover:text-white">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#5E6B52]">
                    Email direct
                  </p>
                  <p className="text-sm font-semibold text-[#1F2A1F] transition-colors group-hover:text-[#5E6B52]">
                    contact@bastienandredev.fr
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-[#E4DACB] bg-white p-4 shadow-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#5E6B52]/20 bg-[#EFF1E9] text-[#3C4733]">
                  <FaLocationDot className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#5E6B52]">
                    Localisation
                  </p>
                  <p className="text-sm font-semibold text-[#1F2A1F]">
                    Uzès & Nîmes, Gard (A distance)
                  </p>
                </div>
              </div>
            </div>

            {/* Liens Réseaux Sociaux */}
            <div className="border-t border-[#E4DACB] pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#5E6B52]">
                Réseaux & Code
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-[#E4DACB] bg-white px-4 py-2 text-xs font-semibold text-[#1F2A1F] transition-all hover:border-[#5E6B52] hover:bg-[#EFF1E9] hover:text-[#5E6B52]"
                  >
                    {name === "Malt" ? (
                      <Image
                        src="/logo-malt.jpg"
                        alt="Logo Malt"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] transform object-contain transition-transform grayscale group-hover:grayscale-0"
                      />
                    ) : Icon ? (
                      <Icon className="h-3.5 w-3.5" />
                    ) : null}
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE (7 cols) */}
          <div className="flex flex-col lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-[#E4DACB] bg-white p-8 shadow-md md:p-10">
              <div className="flex h-full flex-col">
                <h3 className="font-serif text-2xl font-normal text-[#1F2A1F] md:text-3xl">
                  Envoyer un message
                </h3>
                <p className="mt-1 text-sm font-normal text-[#5B6152]">
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
                        className="text-xs font-bold uppercase tracking-wider text-[#4A5043]"
                      >
                        Votre nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Alexandre Rossi"
                        className="w-full rounded-xl border border-[#DCD1BF] bg-[#FAF7F0] px-4 py-3.5 text-sm font-medium text-[#1F2A1F] placeholder-[#8A8F82] transition-all focus:border-[#5E6B52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E6B52]/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-wider text-[#4A5043]"
                      >
                        Votre email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="alex@exemple.com"
                        className="w-full rounded-xl border border-[#DCD1BF] bg-[#FAF7F0] px-4 py-3.5 text-sm font-medium text-[#1F2A1F] placeholder-[#8A8F82] transition-all focus:border-[#5E6B52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E6B52]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold uppercase tracking-wider text-[#4A5043]"
                    >
                      Sujet de votre demande
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Création de site, refonte, accompagnement..."
                      className="w-full rounded-xl border border-[#DCD1BF] bg-[#FAF7F0] px-4 py-3.5 text-sm font-medium text-[#1F2A1F] placeholder-[#8A8F82] transition-all focus:border-[#5E6B52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E6B52]/20"
                    />
                  </div>

                  {/* Zone de texte flexible qui prend toute la hauteur disponible */}
                  <div className="flex flex-1 flex-col space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-[#4A5043]"
                    >
                      Détails du projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Parlez-moi de vos objectifs, vos contraintes et vos délais..."
                      className="min-h-[160px] w-full flex-1 resize-none rounded-xl border border-[#DCD1BF] bg-[#FAF7F0] px-4 py-3.5 text-sm font-medium text-[#1F2A1F] placeholder-[#8A8F82] transition-all focus:border-[#5E6B52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5E6B52]/20"
                    />
                  </div>

                  {/* Messages de retour */}
                  {status.type && (
                    <div
                      className={`flex items-start gap-3 rounded-xl border p-4 text-sm font-medium ${
                        status.type === "success"
                          ? "border-[#5E6B52] bg-[#EFF1E9] text-[#3C4733]"
                          : "border-red-300 bg-red-50 text-red-800"
                      }`}
                    >
                      {status.type === "success" ? (
                        <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5E6B52]" />
                      ) : (
                        <FaExclamation className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      )}
                      <span>{status.message}</span>
                    </div>
                  )}

                  {/* Bouton d'envoi pleine largeur */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#C97A3D] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-[#B3672E] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
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
          </div>
        </div>
      </div>
    </section>
  );
}
