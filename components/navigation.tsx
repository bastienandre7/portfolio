"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
  { label: "Services", href: "/#services" },
  { label: "À propos", href: "/#about" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Projets", href: "/#projets" },
  { label: "Process", href: "/#process" },
  { label: "Technologies", href: "/#technologies" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#F4F5F1] ">
      <div className="mx-auto max-w-6xl h-24 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl text-[#14171C] font-normal"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Bastien Andre
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[13px] tracking-wider font-medium text-[#5B6168]">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#2F6B4F] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#2F6B4F] hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#14171C] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2F6B4F] transition-all duration-300 shadow-sm"
          >
            Me contacter
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#14171C] hover:text-[#2F6B4F] transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <div
        className={`absolute top-24 left-0 w-full bg-[#F4F5F1]/95 backdrop-blur-lg border-b border-[#E4E6E0]/60 transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-[14px] uppercase tracking-wider font-medium text-[#5B6168]">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#2F6B4F] transition-colors py-1 w-full text-center"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#14171C] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2F6B4F] transition-all duration-300 shadow-sm w-[80%] max-w-xs"
          >
            Me contacter
          </Link>
        </nav>
      </div>
    </header>
  );
}
