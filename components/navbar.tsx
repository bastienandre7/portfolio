"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
  { label: "Mes Projets", href: "#projets" },
  { label: "Mes Outils", href: "#tech-stack" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="mx-auto flex h-20 w-full max-w-[100rem] items-center justify-between px-6 sm:px-10 lg:h-24 lg:px-12">
        <Link
          href="/"
          className="font-barlow-condensed text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-hero-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent sm:text-4xl"
        >
          Bastien Andre
        </Link>

        <nav className="hidden items-center gap-10 text-2xl font-semibold tracking-wide text-foreground lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent ${
                item.label === "Contact"
                  ? "inline-flex items-center rounded-full px-2 py-3 font-semibold tracking-normal text-foreground hover:opacity-75"
                  : "relative py-2 font-semibold hover:text-hero-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full text-foreground transition-colors hover:bg-hero-accent/10 hover:text-hero-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-300 ease-out lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 text-2xl font-medium tracking-wide text-foreground">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="w-full py-2 text-center transition-colors hover:text-hero-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
