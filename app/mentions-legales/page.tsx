import LegalFooter from "@/components/legal-footer";

export default function MentionsLegales() {
  return (
    <>
      <main className="relative z-10 min-h-screen overflow-hidden rounded-b-[2.5rem] bg-background text-foreground">
        <div className="mx-auto w-full max-w-[100rem] px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-24 lg:px-12">
          <div className="mb-14 max-w-4xl space-y-5 md:mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hero-accent">
              Juridique
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Mentions <span className="text-hero-accent">légales.</span>
            </h1>
            <p className="pt-2 text-sm text-hero-subtitle/70">
              Dernière mise à jour : Juin 2026
            </p>
          </div>

          <div className="max-w-4xl space-y-12 text-base leading-8 text-hero-subtitle sm:text-lg">
            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                1. Édition du site
              </h2>
              <p>
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin
                2004 pour la confiance dans l&apos;économie numérique, il est
                précisé aux utilisateurs du site internet{" "}
                <strong className="font-semibold text-foreground">
                  bastienandredev.fr
                </strong>{" "}
                l&apos;identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <p className="border-l-2 border-hero-accent/40 pl-5">
                <strong className="font-semibold text-foreground">
                  Propriétaire du site :
                </strong>{" "}
                Bastien Andre — Entreprise Individuelle
                <br />
                <strong className="font-semibold text-foreground">
                  Contact :
                </strong>{" "}
                bastienandredev@gmail.com
                <br />
                <strong className="font-semibold text-foreground">
                  SIRET :
                </strong>{" "}
                943 199 257 00024
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                2. Directeur de la publication
              </h2>
              <p>
                Le Directeur de la publication et responsable du traitement des
                données est{" "}
                <strong className="font-semibold text-foreground">
                  Bastien Andre
                </strong>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé de manière sécurisée par
                l&apos;infrastructure suivante :
              </p>
              <p className="border-l-2 border-hero-accent/40 pl-5">
                <strong className="font-semibold text-foreground">
                  Hébergeur :
                </strong>{" "}
                Netlify, Inc.
                <br />
                <strong className="font-semibold text-foreground">
                  Adresse :
                </strong>{" "}
                512 2nd Street, Suite 200, San Francisco, CA 94107, USA
                <br />
                <strong className="font-semibold text-foreground">
                  Site Web :
                </strong>{" "}
                https://www.netlify.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                4. Propriété intellectuelle
              </h2>
              <p>
                Bastien Andre est propriétaire des droits de propriété
                intellectuelle ou détient les droits d’usage sur tous les
                éléments accessibles sur le site internet, notamment les textes,
                images, graphismes, logos, vidéos, architecture et icônes.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                5. Données personnelles & Formulaire de contact
              </h2>
              <p>
                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
                modifiée et du RGPD, l&apos;utilisateur du site dispose
                d&apos;un droit d&apos;accès, de modification et de suppression
                des informations collectées.
              </p>
              <p>
                Les données collectées via le formulaire de contact (nom,
                e-mail, sujet, message) sont uniquement transmises par e-mail
                via le service{" "}
                <strong className="font-semibold text-foreground">
                  Resend
                </strong>{" "}
                dans le but exclusif de traiter votre demande de projet. Elles
                ne sont ni vendues, ni cédées à des tiers, et sont conservées
                pour une durée maximale de 3 ans.
              </p>
            </section>
          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  );
}
