"use client";

import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projets" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#technologies" },
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

  const isDark = isOpen || !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isOpen
          ? "bg-[#0B1410]"
          : isScrolled
            ? "bg-[#FAFBF9]/90 backdrop-blur-md border-b border-[#E4E6E0]/60 shadow-sm"
            : "bg-transparent border-b border-transparent "
      }`}
    >
      <div className="mx-auto max-w-6xl h-20 md:h-24 px-6 flex items-center justify-between">
        <a
          href="#"
          className={`text-xl md:text-2xl font-normal transition-colors duration-300 ${
            isDark ? "text-[#F4F5F1]" : "text-[#14171C]"
          }`}
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Bastien Andre
        </a>

        <nav
          className={`hidden lg:flex items-center gap-6 text-[13px] tracking-wider font-medium transition-colors duration-300 ${
            isScrolled ? "text-[#5B6168]" : "text-[#C9CFC9]"
          }`}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all ${
                isScrolled
                  ? "hover:text-[#2F6B4F] after:bg-[#2F6B4F]"
                  : "hover:text-[#9FCBAE] after:bg-[#9FCBAE]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
              isScrolled
                ? "bg-[#14171C] text-white hover:bg-[#2F6B4F]"
                : "bg-[#F4F5F1] text-[#0B1410] hover:bg-[#9FCBAE]"
            }`}
          >
            Me contacter
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors focus:outline-none relative z-10 ${
            isDark
              ? "text-[#F4F5F1] hover:text-[#9FCBAE]"
              : "text-[#14171C] hover:text-[#2F6B4F]"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 -z-10 bg-[#0B1410] transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full w-full flex flex-col items-center justify-center gap-8 text-[15px] uppercase tracking-wider font-medium text-[#C9CFC9] px-6">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#9FCBAE] transition-colors py-1 w-full text-center"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm w-[80%] max-w-xs bg-[#F4F5F1] text-[#0B1410] hover:bg-[#9FCBAE]"
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
