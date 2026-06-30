import Navigation from "@/components/navigation";

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FAFBF9] text-[#14171C] py-24 md:py-32">
        <div className="mx-auto max-w-3xl w-full px-6">
          <div className="space-y-4 mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
              Juridique
            </p>
            <h1
              className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#14171C]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Mentions{" "}
              <span className="italic text-[#2F6B4F] font-normal">
                Légales.
              </span>
            </h1>
            <p className="text-xs text-[#5B6168]/70 font-light pt-2">
              Dernière mise à jour : Juin 2026
            </p>
          </div>

          <div className="space-y-10 text-sm text-[#5B6168] font-light leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#14171C] uppercase tracking-wide text-xs font-semibold">
                1. Édition du site
              </h2>
              <p>
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin
                2004 pour la confiance dans l&apos;économie numérique, il est
                précisé aux utilisateurs du site internet{" "}
                <span className="font-medium text-[#14171C]">
                  bastienandredev.fr
                </span>{" "}
                l&apos;identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <p className="pl-4 border-l border-[#E4E6E0]">
                <strong className="font-medium text-[#14171C]">
                  Propriétaire du site :
                </strong>{" "}
                Bastien Andre — Entreprise Individuelle
                <br />
                <strong className="font-medium text-[#14171C]">
                  Contact :
                </strong>{" "}
                contact@bastienandredev.fr
                <br />
                <strong className="font-medium text-[#14171C]">
                  Adresse :
                </strong>{" "}
                Uzès, Gard, France
                <br />
                <strong className="font-medium text-[#14171C]">
                  SIRET :
                </strong>{" "}
                943 199 257 00016
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#14171C] uppercase tracking-wide text-xs font-semibold">
                2. Directeur de la publication
              </h2>
              <p>
                Le Directeur de la publication et responsable du traitement des
                données est{" "}
                <span className="font-medium text-[#14171C]">
                  Bastien Andre
                </span>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#14171C] uppercase tracking-wide text-xs font-semibold">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé de manière sécurisée par
                l&apos;infrastructure suivante :
              </p>
              <p className="pl-4 border-l border-[#E4E6E0]">
                <strong className="font-medium text-[#14171C]">
                  Hébergeur :
                </strong>{" "}
                Netlify, Inc.
                <br />
                <strong className="font-medium text-[#14171C]">
                  Adresse :
                </strong>{" "}
                512 2nd Street, Suite 200, San Francisco, CA 94107, USA
                <br />
                <strong className="font-medium text-[#14171C]">
                  Site Web :
                </strong>{" "}
                https://www.netlify.com
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#14171C] uppercase tracking-wide text-xs font-semibold">
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

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#14171C] uppercase tracking-wide text-xs font-semibold">
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
                <span className="font-medium text-[#14171C]">Resend</span> dans
                le but exclusif de traiter votre demande de projet. Elles ne
                sont ni vendues, ni cédées à des tiers, et sont conservées pour
                une durée maximale de 3 ans.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
