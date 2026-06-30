import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FAFBF9] text-[#14171C] relative overflow-hidden border-t border-[#E4E6E0]/60">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#E4E6E0]/40">
          <div className="space-y-2">
            <h3
              className="text-xl md:text-2xl text-[#14171C] font-normal"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Bastien Andre
            </h3>
            <p className="text-sm text-[#5B6168] max-w-md font-light leading-relaxed">
              Développeur Full Stack spécialisé en Next.js. J&apos;accompagne
              les entreprises dans la création d&apos;interfaces rapides,
              modernes et pensées pour durer.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:contact@bastienandredev.fr"
              aria-label="Envoyer un email"
              className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
            >
              <CiMail
                size={20}
                className="transform group-hover:scale-105 transition-transform"
              />
            </a>

            <a
              href="https://github.com/..."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter le profil GitHub"
              className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
            >
              <FaGithub
                size={18}
                className="transform group-hover:scale-105 transition-transform"
              />
            </a>

            <a
              href="https://linkedin.com/in/..."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter le profil LinkedIn"
              className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
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
              className="w-11 h-11 rounded-xl bg-white border border-[#E4E6E0]/60 shadow-[0_4px_12px_rgba(0,0,0,0.01)] flex items-center justify-center text-[#5B6168] hover:border-[#2F6B4F]/40 hover:text-[#2F6B4F] hover:bg-[#EAF1EC]/40 transition-all duration-300 group"
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

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-light text-[#7A828A] tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} Bastien Andre. Tous droits
            réservés.
          </p>

          <div className="flex gap-6 font-medium">
            <a
              href="#"
              className="hover:text-[#2F6B4F] transition-colors duration-200"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="hover:text-[#2F6B4F] transition-colors duration-200"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
