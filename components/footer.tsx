import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C0E] text-[#F4F5F1] relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <h3
              className="text-xl md:text-2xl text-[#F4F5F1] font-normal"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Bastien Andre
            </h3>
            <p className="text-sm text-[#A8AEB4] max-w-md font-light leading-relaxed">
              Développeur Full Stack spécialisé en Next.js. J&apos;accompagne
              les entreprises dans la création d&apos;interfaces rapides,
              modernes et pensées pour durer.
            </p>
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

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-light text-[#6E747A] tracking-wide">
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
