"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
  { label: "À propos", href: "#about" },
  { label: "Mes Outils", href: "#tech-stack" },
  { label: "Mes Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isDark = isOpen;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isOpen
          ? "bg-[#1F2A1F]"
          : isScrolled
            ? "bg-white/90 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl h-20 md:h-24 px-6 flex items-center justify-between">
        <Link
          href="/"
          className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${
            isDark ? "text-[#F6F1E7]" : "text-[#1F2A1F]"
          }`}
        >
          Bastien Andre
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-md tracking-wider font-medium text-black">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                item.label === "Contact"
                  ? "rounded-full bg-black px-5 py-2.5 text-white hover:bg-[#1F2A1F]"
                  : "relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all hover:text-[#5E6B52] after:bg-[#5E6B52]"
              }`}
            >
              {item.label === "Contact" ? (
                <span className="inline-flex items-center gap-2">
                  {item.label}
                  <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </span>
              ) : (
                item.label
              )}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors focus:outline-none relative z-10 ${
            isDark
              ? "text-[#F6F1E7] hover:text-[#C97A3D]"
              : "text-[#1F2A1F] hover:text-[#5E6B52]"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 -z-10 bg-black transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full w-full flex flex-col items-center justify-center gap-8 text-[15px] uppercase tracking-wider font-medium text-[#E8DDC8] px-6">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#C97A3D] transition-colors py-1 w-full text-center"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm w-[80%] max-w-xs bg-[#C97A3D] text-white hover:bg-[#B3672E]"
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
