"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@bastienandredev.fr",
    href: "mailto:contact@bastienandredev.fr",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Uzès, Gard",
  },
];

export default function Contact() {
  // GESTION DES ÉTATS (AJOUTÉE)
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
            "Votre message a bien été envoyé ! Je vous réponds au plus vite.",
        });
        (e.target as HTMLFormElement).reset(); // Vide le formulaire
      } else {
        setStatus({
          type: "error",
          message:
            "Une erreur est survenue. Merci de réessayer ou de m'écrire directement.",
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
      className="bg-[#FAFBF9] text-[#14171C] relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E3E8E1] blur-[130px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#EAECE6] blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6">
        <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          <div className="bg-white rounded-[24px] border border-[#E4E6E0]/50 shadow-[0_15px_40px_rgba(0,0,0,0.02)] p-6 md:p-10">
            <h3
              className="text-2xl md:text-3xl text-[#14171C] font-normal mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Une idée en tête ?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-[#5B6168]"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name" // AJOUTÉ POUR LE FORMDATA
                    required
                    placeholder="Alexandre Rossi"
                    className="w-full bg-[#FAFBF9] rounded-xl border border-[#E4E6E0] px-4 py-3 text-sm text-[#14171C] placeholder-[#5B6168]/40 focus:outline-none focus:border-[#2F6B4F]/60 focus:ring-1 focus:ring-[#2F6B4F]/60 transition-all font-light"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-[#5B6168]"
                  >
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // AJOUTÉ POUR LE FORMDATA
                    required
                    placeholder="alex@exemple.com"
                    className="w-full bg-[#FAFBF9] rounded-xl border border-[#E4E6E0] px-4 py-3 text-sm text-[#14171C] placeholder-[#5B6168]/40 focus:outline-none focus:border-[#2F6B4F]/60 focus:ring-1 focus:ring-[#2F6B4F]/60 transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold uppercase tracking-wider text-[#5B6168]"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject" // AJOUTÉ POUR LE FORMDATA
                  required
                  placeholder="Refonte de notre site e-commerce..."
                  className="w-full bg-[#FAFBF9] rounded-xl border border-[#E4E6E0] px-4 py-3 text-sm text-[#14171C] placeholder-[#5B6168]/40 focus:outline-none focus:border-[#2F6B4F]/60 focus:ring-1 focus:ring-[#2F6B4F]/60 transition-all font-light"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-[#5B6168]"
                >
                  Votre projet en quelques mots
                </label>
                <textarea
                  id="message"
                  name="message" // AJOUTÉ POUR LE FORMDATA
                  required
                  rows={5}
                  placeholder="Décrivez ici vos besoins, vos objectifs et vos délais estimés..."
                  className="w-full bg-[#FAFBF9] rounded-xl border border-[#E4E6E0] px-4 py-3 text-sm text-[#14171C] placeholder-[#5B6168]/40 focus:outline-none focus:border-[#2F6B4F]/60 focus:ring-1 focus:ring-[#2F6B4F]/60 transition-all font-light resize-none"
                />
              </div>

              {/* RETOUR VISUEL SUR L'ENVOI (AJOUTÉ) */}
              {status.type && (
                <div
                  className={`p-4 rounded-xl text-sm border ${status.type === "success" ? "bg-[#EAF1EC] text-[#2F6B4F] border-[#2F6B4F]/20" : "bg-red-50 text-red-700 border-red-200"}`}
                >
                  {status.message}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting} // DESACTIVÉ PENDANT L'ENVOI
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#14171C] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2F6B4F] transition-all duration-300 shadow-sm group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  <ArrowRight
                    size={14}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-10 lg:sticky lg:top-28">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
                Contact
              </p>
              <h2
                className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#14171C]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
              >
                Discutons de votre{" "}
                <span className="italic text-[#2F6B4F] font-normal">
                  projet.
                </span>
              </h2>
              <p className="text-[#5B6168] text-sm md:text-base font-light leading-relaxed pt-2">
                Que vous ayez besoin d&apos;un nouveau site, d&apos;une refonte
                ou d&apos;une application web, je serai ravi d&apos;échanger
                avec vous. Le premier rendez-vous est gratuit et sans
                engagement.
              </p>
            </div>

            <div className="space-y-2 w-full">
              {contacts.map(({ icon: Icon, title, value, href }) => {
                const content = (
                  <>
                    <div className="w-11 h-11 rounded-xl bg-[#EAF1EC] border border-[#2F6B4F]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2F6B4F]">
                      <Icon
                        size={18}
                        strokeWidth={1.75}
                        className="text-[#2F6B4F] group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#5B6168] mb-0.5">
                        {title}
                      </p>
                      <p className="font-medium text-[#14171C] text-sm group-hover:text-[#2F6B4F] transition-colors duration-300">
                        {value}
                      </p>
                    </div>
                  </>
                );

                return href ? (
                  <a
                    key={title}
                    href={href}
                    className="bg-white rounded-[24px] border border-[#E4E6E0]/50 p-5 flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:border-[#2F6B4F]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 group"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={title}
                    className="bg-white rounded-[24px] border border-[#E4E6E0]/50 p-5 flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.02)] group"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
