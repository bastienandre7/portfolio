import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-0 bg-black text-[#F4F5F1] relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-12">
        <div className="border-b border-white/10 pb-12 md:pb-16">
          <h3 className="whitespace-nowrap text-center text-[clamp(3rem,10vw,13rem)] font-medium leading-[0.78] tracking-[-0.07em] text-[#7B7D7A]">
            Bastien Andre
          </h3>
        </div>

        <div className="flex flex-col items-start justify-between gap-10 pt-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7B7D7A]">
              Développeur web freelance · Uzès
            </p>
            <a
              href="mailto:contact@bastienandredev.fr"
              className="mt-3 inline-block text-base font-medium text-[#F4F5F1] transition-colors hover:text-[#9FCBAE] sm:text-lg"
            >
              contact@bastienandredev.fr
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:contact@bastienandredev.fr"
              aria-label="Envoyer un email"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A8AEB4] hover:border-[#9FCBAE]/40 hover:text-[#9FCBAE] hover:bg-[#9FCBAE]/10 transition-all duration-300 group"
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
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A8AEB4] hover:border-[#9FCBAE]/40 hover:text-[#9FCBAE] hover:bg-[#9FCBAE]/10 transition-all duration-300 group"
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
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A8AEB4] hover:border-[#9FCBAE]/40 hover:text-[#9FCBAE] hover:bg-[#9FCBAE]/10 transition-all duration-300 group"
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
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A8AEB4] hover:border-[#9FCBAE]/40 hover:text-[#9FCBAE] hover:bg-[#9FCBAE]/10 transition-all duration-300 group"
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

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs font-light tracking-wide text-[#6E747A] sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Bastien Andre. Tous droits
            réservés.
          </p>

          <div className="flex gap-6 font-medium">
            <a
              href="/mentions-legales"
              className="hover:text-[#9FCBAE] transition-colors duration-200"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="hover:text-[#9FCBAE] transition-colors duration-200"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
