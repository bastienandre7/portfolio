export default function LegalFooter() {
  return (
    <footer className="relative z-10 mx-auto mt-12 flex w-full max-w-[100rem] flex-col items-start justify-between gap-4 border-t border-foreground/10 px-6 py-6 text-sm font-medium tracking-wide text-hero-subtitle/70 sm:mt-16 sm:flex-row sm:items-center sm:px-10 lg:px-12">
      <p>
        &copy; {new Date().getFullYear()} Bastien Andre. Tous droits réservés.
      </p>

      <nav aria-label="Liens légaux">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href="/mentions-legales"
              className="transition-colors duration-200 hover:text-hero-accent"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="/politique-de-confidentialite"
              className="transition-colors duration-200 hover:text-hero-accent"
            >
              Politique de confidentialité
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
